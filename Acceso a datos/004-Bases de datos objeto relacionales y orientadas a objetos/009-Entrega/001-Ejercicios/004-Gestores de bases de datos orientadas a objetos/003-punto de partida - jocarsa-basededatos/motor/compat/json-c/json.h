// Sustituto mínimo y compatible de json-c para compilar AndreiBBDD en Windows
// sin depender de la biblioteca json-c. Solo implementa la parte de la API que
// usa el motor (y la capa C para Windows). Se activa añadiendo -Icompat al
// compilar; en Linux se sigue usando la json-c real del sistema.
//
// Igual que en json-c, el valor JSON null se representa con un puntero nulo,
// los objetos conservan el orden de inserción y la memoria se gestiona con
// contadores de referencias (json_object_get / json_object_put).
#pragma once

#include <cerrno>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <fstream>
#include <sstream>
#include <string>
#include <utility>
#include <vector>

enum json_type {
    json_type_null,
    json_type_boolean,
    json_type_double,
    json_type_int,
    json_type_object,
    json_type_array,
    json_type_string
};

#define JSON_C_TO_STRING_PLAIN 0
#define JSON_C_TO_STRING_SPACED (1 << 0)
#define JSON_C_TO_STRING_PRETTY (1 << 1)
#define JSON_C_TO_STRING_NOSLASHESCAPE (1 << 4)

struct json_object {
    json_type tipo = json_type_null;
    int referencias = 1;
    bool booleano = false;
    int64_t entero = 0;
    double real = 0.0;
    std::string cadena;
    std::vector<std::pair<std::string, json_object*>> miembros;  // objeto
    std::vector<json_object*> elementos;                         // array
    std::string cache;  // texto devuelto por json_object_to_json_string*
};

inline json_object* json_object_get(json_object* o) {
    if (o) ++o->referencias;
    return o;
}

inline int json_object_put(json_object* o) {
    if (!o) return 0;
    if (--o->referencias > 0) return 0;
    for (auto& m : o->miembros) json_object_put(m.second);
    for (auto* e : o->elementos) json_object_put(e);
    delete o;
    return 1;
}

inline json_type json_object_get_type(const json_object* o) {
    return o ? o->tipo : json_type_null;
}

inline int json_object_is_type(const json_object* o, json_type t) {
    return json_object_get_type(o) == t;
}

/* ---------- Constructores ---------- */
inline json_object* json_object__nuevo(json_type t) {
    auto* o = new json_object();
    o->tipo = t;
    return o;
}
inline json_object* json_object_new_object() { return json_object__nuevo(json_type_object); }
inline json_object* json_object_new_array() { return json_object__nuevo(json_type_array); }
inline json_object* json_object_new_null() { return nullptr; }
inline json_object* json_object_new_string(const char* s) {
    auto* o = json_object__nuevo(json_type_string);
    o->cadena = s ? s : "";
    return o;
}
inline json_object* json_object_new_string_len(const char* s, int n) {
    auto* o = json_object__nuevo(json_type_string);
    if (s && n > 0) o->cadena.assign(s, static_cast<size_t>(n));
    return o;
}
inline json_object* json_object_new_int64(int64_t v) {
    auto* o = json_object__nuevo(json_type_int);
    o->entero = v;
    return o;
}
inline json_object* json_object_new_int(int32_t v) { return json_object_new_int64(v); }
inline json_object* json_object_new_double(double v) {
    auto* o = json_object__nuevo(json_type_double);
    o->real = v;
    return o;
}
inline json_object* json_object_new_boolean(int v) {
    auto* o = json_object__nuevo(json_type_boolean);
    o->booleano = v != 0;
    return o;
}

/* ---------- Objetos ---------- */
inline int json_object_object_add(json_object* o, const char* clave, json_object* valor) {
    if (!o || o->tipo != json_type_object || !clave) {
        json_object_put(valor);
        return -1;
    }
    for (auto& m : o->miembros) {
        if (m.first == clave) {
            if (m.second != valor) json_object_put(m.second);
            m.second = valor;
            return 0;
        }
    }
    o->miembros.emplace_back(clave, valor);
    return 0;
}

inline int json_object_object_get_ex(const json_object* o, const char* clave, json_object** valor) {
    if (valor) *valor = nullptr;
    if (!o || o->tipo != json_type_object || !clave) return 0;
    for (const auto& m : o->miembros) {
        if (m.first == clave) {
            if (valor) *valor = m.second;
            return 1;
        }
    }
    return 0;
}

inline json_object* json_object_object_get(const json_object* o, const char* clave) {
    json_object* v = nullptr;
    json_object_object_get_ex(o, clave, &v);
    return v;
}

inline int json_object_object_length(const json_object* o) {
    return (o && o->tipo == json_type_object) ? static_cast<int>(o->miembros.size()) : 0;
}

// Equivalente a la macro de json-c: declara `clave` (char*) y `valor` (json_object*).
#define json_object_object_foreach(obj, clave, valor)                                  \
    char* clave = nullptr;                                                             \
    json_object* valor = nullptr;                                                      \
    for (size_t clave##_indice = 0;                                                    \
         (obj) && clave##_indice < (obj)->miembros.size() &&                           \
         ((clave = const_cast<char*>((obj)->miembros[clave##_indice].first.c_str())),  \
          (valor = (obj)->miembros[clave##_indice].second), true);                     \
         ++clave##_indice)

/* ---------- Arrays ---------- */
inline int json_object_array_add(json_object* o, json_object* valor) {
    if (!o || o->tipo != json_type_array) {
        json_object_put(valor);
        return -1;
    }
    o->elementos.push_back(valor);
    return 0;
}

inline size_t json_object_array_length(const json_object* o) {
    return (o && o->tipo == json_type_array) ? o->elementos.size() : 0;
}

inline json_object* json_object_array_get_idx(const json_object* o, size_t i) {
    if (!o || o->tipo != json_type_array || i >= o->elementos.size()) return nullptr;
    return o->elementos[i];
}

/* ---------- Serialización ---------- */
inline void json__escribir_cadena(std::string& out, const std::string& s) {
    out += '"';
    for (unsigned char c : s) {
        switch (c) {
            case '"': out += "\\\""; break;
            case '\\': out += "\\\\"; break;
            case '\b': out += "\\b"; break;
            case '\f': out += "\\f"; break;
            case '\n': out += "\\n"; break;
            case '\r': out += "\\r"; break;
            case '\t': out += "\\t"; break;
            default:
                if (c < 0x20) {
                    char buf[8];
                    std::snprintf(buf, sizeof buf, "\\u%04x", c);
                    out += buf;
                } else {
                    out += static_cast<char>(c);
                }
        }
    }
    out += '"';
}

inline void json__escribir(std::string& out, const json_object* o, int flags, int nivel) {
    const bool bonito = (flags & JSON_C_TO_STRING_PRETTY) != 0;
    const bool espaciado = (flags & JSON_C_TO_STRING_SPACED) != 0;
    auto sangria = [&](int n) {
        if (bonito) {
            out += '\n';
            out.append(static_cast<size_t>(n) * 2, ' ');
        }
    };
    switch (json_object_get_type(o)) {
        case json_type_null: out += "null"; break;
        case json_type_boolean: out += o->booleano ? "true" : "false"; break;
        case json_type_int: out += std::to_string(o->entero); break;
        case json_type_double: {
            if (!std::isfinite(o->real)) { out += "null"; break; }
            char buf[64];
            std::snprintf(buf, sizeof buf, "%.17g", o->real);
            std::string t = buf;
            if (t.find_first_of(".eEn") == std::string::npos) t += ".0";
            out += t;
            break;
        }
        case json_type_string: json__escribir_cadena(out, o->cadena); break;
        case json_type_object: {
            if (o->miembros.empty()) { out += "{}"; break; }
            out += '{';
            bool primero = true;
            for (const auto& m : o->miembros) {
                if (!primero) out += ',';
                primero = false;
                if (espaciado && !bonito) out += ' ';
                sangria(nivel + 1);
                json__escribir_cadena(out, m.first);
                out += (bonito || espaciado) ? ": " : ":";
                json__escribir(out, m.second, flags, nivel + 1);
            }
            sangria(nivel);
            if (espaciado && !bonito) out += ' ';
            out += '}';
            break;
        }
        case json_type_array: {
            if (o->elementos.empty()) { out += "[]"; break; }
            out += '[';
            bool primero = true;
            for (const auto* e : o->elementos) {
                if (!primero) out += ',';
                primero = false;
                if (espaciado && !bonito) out += ' ';
                sangria(nivel + 1);
                json__escribir(out, e, flags, nivel + 1);
            }
            sangria(nivel);
            if (espaciado && !bonito) out += ' ';
            out += ']';
            break;
        }
    }
}

inline const char* json_object_to_json_string_ext(json_object* o, int flags) {
    if (!o) return "null";
    o->cache.clear();
    json__escribir(o->cache, o, flags, 0);
    return o->cache.c_str();
}

inline const char* json_object_to_json_string(json_object* o) {
    return json_object_to_json_string_ext(o, JSON_C_TO_STRING_SPACED);
}

/* ---------- Lectura de valores ---------- */
inline const char* json_object_get_string(json_object* o) {
    if (!o) return nullptr;
    if (o->tipo == json_type_string) return o->cadena.c_str();
    return json_object_to_json_string(o);
}

inline int json_object_get_string_len(const json_object* o) {
    return (o && o->tipo == json_type_string) ? static_cast<int>(o->cadena.size()) : 0;
}

inline int64_t json_object_get_int64(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_int: return o->entero;
        case json_type_double: return static_cast<int64_t>(o->real);
        case json_type_boolean: return o->booleano ? 1 : 0;
        case json_type_string: return std::strtoll(o->cadena.c_str(), nullptr, 10);
        default: return 0;
    }
}

inline int32_t json_object_get_int(const json_object* o) {
    return static_cast<int32_t>(json_object_get_int64(o));
}

inline double json_object_get_double(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_int: return static_cast<double>(o->entero);
        case json_type_double: return o->real;
        case json_type_boolean: return o->booleano ? 1.0 : 0.0;
        case json_type_string: return std::strtod(o->cadena.c_str(), nullptr);
        default: return 0.0;
    }
}

inline int json_object_get_boolean(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_boolean: return o->booleano;
        case json_type_int: return o->entero != 0;
        case json_type_double: return o->real != 0.0;
        case json_type_string: return !o->cadena.empty();
        case json_type_object:
        case json_type_array: return 1;
        default: return 0;
    }
}

/* ---------- Comparación ---------- */
inline int json_object_equal(const json_object* a, const json_object* b) {
    if (a == b) return 1;
    if (json_object_get_type(a) != json_object_get_type(b)) return 0;
    if (!a || !b) return 0;
    switch (a->tipo) {
        case json_type_null: return 1;
        case json_type_boolean: return a->booleano == b->booleano;
        case json_type_int: return a->entero == b->entero;
        case json_type_double: return a->real == b->real;
        case json_type_string: return a->cadena == b->cadena;
        case json_type_array:
            if (a->elementos.size() != b->elementos.size()) return 0;
            for (size_t i = 0; i < a->elementos.size(); ++i)
                if (!json_object_equal(a->elementos[i], b->elementos[i])) return 0;
            return 1;
        case json_type_object:
            // Igual que json-c: mismas claves y valores, sin importar el orden.
            if (a->miembros.size() != b->miembros.size()) return 0;
            for (const auto& m : a->miembros) {
                json_object* otro = nullptr;
                if (!json_object_object_get_ex(b, m.first.c_str(), &otro)) return 0;
                if (!json_object_equal(m.second, otro)) return 0;
            }
            return 1;
    }
    return 0;
}

/* ---------- Analizador ---------- */
struct json__analizador {
    const char* p;
    const char* fin;
    bool error = false;

    void espacios() {
        while (p < fin && (*p == ' ' || *p == '\t' || *p == '\n' || *p == '\r')) ++p;
    }

    static void utf8(std::string& out, uint32_t cp) {
        if (cp < 0x80) out += static_cast<char>(cp);
        else if (cp < 0x800) {
            out += static_cast<char>(0xC0 | (cp >> 6));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        } else if (cp < 0x10000) {
            out += static_cast<char>(0xE0 | (cp >> 12));
            out += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        } else {
            out += static_cast<char>(0xF0 | (cp >> 18));
            out += static_cast<char>(0x80 | ((cp >> 12) & 0x3F));
            out += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        }
    }

    bool hex4(uint32_t& v) {
        if (fin - p < 4) return false;
        v = 0;
        for (int i = 0; i < 4; ++i) {
            char c = *p++;
            v <<= 4;
            if (c >= '0' && c <= '9') v |= static_cast<uint32_t>(c - '0');
            else if (c >= 'a' && c <= 'f') v |= static_cast<uint32_t>(c - 'a' + 10);
            else if (c >= 'A' && c <= 'F') v |= static_cast<uint32_t>(c - 'A' + 10);
            else return false;
        }
        return true;
    }

    bool cadena(std::string& out) {
        if (p >= fin || *p != '"') return false;
        ++p;
        while (p < fin) {
            char c = *p++;
            if (c == '"') return true;
            if (static_cast<unsigned char>(c) < 0x20) return false;
            if (c != '\\') { out += c; continue; }
            if (p >= fin) return false;
            char e = *p++;
            switch (e) {
                case '"': out += '"'; break;
                case '\\': out += '\\'; break;
                case '/': out += '/'; break;
                case 'b': out += '\b'; break;
                case 'f': out += '\f'; break;
                case 'n': out += '\n'; break;
                case 'r': out += '\r'; break;
                case 't': out += '\t'; break;
                case 'u': {
                    uint32_t cp;
                    if (!hex4(cp)) return false;
                    if (cp >= 0xD800 && cp <= 0xDBFF) {
                        uint32_t bajo;
                        if (fin - p >= 6 && p[0] == '\\' && p[1] == 'u') {
                            p += 2;
                            if (!hex4(bajo) || bajo < 0xDC00 || bajo > 0xDFFF) return false;
                            cp = 0x10000 + ((cp - 0xD800) << 10) + (bajo - 0xDC00);
                        } else {
                            return false;
                        }
                    }
                    utf8(out, cp);
                    break;
                }
                default: return false;
            }
        }
        return false;
    }

    bool literal(const char* s) {
        size_t n = std::strlen(s);
        if (static_cast<size_t>(fin - p) < n || std::strncmp(p, s, n) != 0) return false;
        p += n;
        return true;
    }

    json_object* valor(int profundidad) {
        if (profundidad > 512) { error = true; return nullptr; }
        espacios();
        if (p >= fin) { error = true; return nullptr; }
        char c = *p;
        if (c == '{') {
            ++p;
            json_object* o = json_object_new_object();
            espacios();
            if (p < fin && *p == '}') { ++p; return o; }
            while (true) {
                espacios();
                std::string clave;
                if (!cadena(clave)) { error = true; json_object_put(o); return nullptr; }
                espacios();
                if (p >= fin || *p != ':') { error = true; json_object_put(o); return nullptr; }
                ++p;
                json_object* v = valor(profundidad + 1);
                if (error) { json_object_put(o); return nullptr; }
                json_object_object_add(o, clave.c_str(), v);
                espacios();
                if (p < fin && *p == ',') { ++p; continue; }
                if (p < fin && *p == '}') { ++p; return o; }
                error = true;
                json_object_put(o);
                return nullptr;
            }
        }
        if (c == '[') {
            ++p;
            json_object* a = json_object_new_array();
            espacios();
            if (p < fin && *p == ']') { ++p; return a; }
            while (true) {
                json_object* v = valor(profundidad + 1);
                if (error) { json_object_put(a); return nullptr; }
                json_object_array_add(a, v);
                espacios();
                if (p < fin && *p == ',') { ++p; continue; }
                if (p < fin && *p == ']') { ++p; return a; }
                error = true;
                json_object_put(a);
                return nullptr;
            }
        }
        if (c == '"') {
            std::string s;
            if (!cadena(s)) { error = true; return nullptr; }
            auto* o = json_object__nuevo(json_type_string);
            o->cadena = std::move(s);
            return o;
        }
        if (literal("true")) return json_object_new_boolean(1);
        if (literal("false")) return json_object_new_boolean(0);
        if (literal("null")) return nullptr;
        if (c == '-' || (c >= '0' && c <= '9')) {
            const char* inicio = p;
            if (*p == '-') ++p;
            bool decimal = false;
            while (p < fin && ((*p >= '0' && *p <= '9') || *p == '.' || *p == 'e' || *p == 'E' || *p == '+' || *p == '-')) {
                if (*p == '.' || *p == 'e' || *p == 'E') decimal = true;
                ++p;
            }
            std::string num(inicio, p);
            if (num == "-" || num.empty()) { error = true; return nullptr; }
            if (!decimal) {
                errno = 0;
                char* resto = nullptr;
                long long v = std::strtoll(num.c_str(), &resto, 10);
                if (errno == 0 && resto && *resto == '\0') return json_object_new_int64(v);
            }
            char* resto = nullptr;
            double d = std::strtod(num.c_str(), &resto);
            if (!resto || *resto != '\0') { error = true; return nullptr; }
            return json_object_new_double(d);
        }
        error = true;
        return nullptr;
    }
};

// Devuelve NULL si el texto no es JSON válido (o si el JSON es literalmente null).
inline json_object* json_tokener_parse(const char* texto) {
    if (!texto) return nullptr;
    json__analizador a{texto, texto + std::strlen(texto)};
    // Omitir BOM UTF-8.
    if (a.fin - a.p >= 3 && static_cast<unsigned char>(a.p[0]) == 0xEF &&
        static_cast<unsigned char>(a.p[1]) == 0xBB && static_cast<unsigned char>(a.p[2]) == 0xBF)
        a.p += 3;
    json_object* o = a.valor(0);
    a.espacios();
    if (a.error || a.p != a.fin) {
        json_object_put(o);
        return nullptr;
    }
    return o;
}

inline json_object* json_object_from_file(const char* ruta) {
    if (!ruta) return nullptr;
    std::ifstream f(ruta, std::ios::binary);
    if (!f) return nullptr;
    std::ostringstream ss;
    ss << f.rdbuf();
    std::string texto = ss.str();
    return json_tokener_parse(texto.c_str());
}

inline int json_object_to_file_ext(const char* ruta, json_object* o, int flags) {
    std::ofstream f(ruta, std::ios::binary | std::ios::trunc);
    if (!f) return -1;
    f << json_object_to_json_string_ext(o, flags);
    return f ? 0 : -1;
}
