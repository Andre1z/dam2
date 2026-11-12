import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename =
    fileURLToPath(
        import.meta.url
    );

const __dirname =
    path.dirname(
        __filename
    );

const app = express();

app.use(cors());

app.use(express.json());

const puerto = 3000;

/*
=========================================
CARPETAS
=========================================
*/

const uploads_dir =
    path.join(
        __dirname,
        "uploads"
    );

const subtitulos_dir =
    path.join(
        __dirname,
        "subtitulos"
    );

if (!fs.existsSync(uploads_dir)) {

    fs.mkdirSync(
        uploads_dir,
        {
            recursive: true
        }
    );

}

if (!fs.existsSync(subtitulos_dir)) {

    fs.mkdirSync(
        subtitulos_dir,
        {
            recursive: true
        }
    );

}

/*
=========================================
LIMPIAR ARCHIVOS
=========================================
*/

function eliminar_archivo(
    ruta
) {

    try {

        if (
            fs.existsSync(ruta)
        ) {

            fs.unlinkSync(ruta);

        }

    }

    catch (error) {

        console.error(
            "Error eliminando:",
            ruta
        );

    }

}

/*
=========================================
MULTER
=========================================
*/

const storage =
    multer.diskStorage({

        destination:
            uploads_dir,

        filename:
            (
                req,
                file,
                callback
            ) => {

                const extension =
                    path.extname(
                        file.originalname
                    );

                callback(
                    null,
                    Date.now() + extension
                );

            }

    });

const upload =
    multer({
        storage
    });

/*
=========================================
HEALTH
=========================================
*/

app.get(
    "/health",
    (
        req,
        res
    ) => {

        res.json({

            estado: "ok"

        });

    }
);

/*
=========================================
TRANSCRIBIR
=========================================
*/

app.post(
    "/transcribir",

    upload.single("video"),

    async (
        req,
        res
    ) => {

        try {

            if (!req.file) {

                return res.status(400).json({

                    error:
                        "No se recibió ningún vídeo"

                });

            }

            const ruta_video =
                req.file.path;

            const nombre_base =
                path.parse(
                    req.file.filename
                ).name;

            console.log(
                "Procesando:",
                req.file.originalname
            );

            const proceso =
                spawn(
                    "python",
                    [
                        "-m",
                        "whisper",

                        ruta_video,

                        "--model",
                        "small",

                        "--language",
                        "es",

                        "--output_format",
                        "all",

                        "--output_dir",
                        subtitulos_dir
                    ]
                );

            let errores = "";

            proceso.stderr.on(
                "data",
                dato => {

                    errores +=
                        dato.toString();

                }
            );

            proceso.on(
                "close",
                codigo => {

                    if (
                        codigo !== 0
                    ) {

                        eliminar_archivo(
                            ruta_video
                        );

                        return res
                            .status(500)
                            .json({

                                error:
                                    errores

                            });

                    }

                    try {

                        const ruta_txt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.txt`
                            );

                        const ruta_srt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.srt`
                            );

                        const ruta_vtt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.vtt`
                            );

                        const texto =
                            fs.readFileSync(
                                ruta_txt,
                                "utf8"
                            );

                        const srt =
                            fs.readFileSync(
                                ruta_srt,
                                "utf8"
                            );

                        const vtt =
                            fs.readFileSync(
                                ruta_vtt,
                                "utf8"
                            );

                        res.json({

                            exito: true,

                            texto,

                            srt,

                            vtt

                        });

                        eliminar_archivo(
                            ruta_video
                        );

                        eliminar_archivo(
                            ruta_txt
                        );

                        eliminar_archivo(
                            ruta_srt
                        );

                        eliminar_archivo(
                            ruta_vtt
                        );

                        console.log(
                            "Proceso completado"
                        );

                    }

                    catch (error) {

                        console.error(
                            error
                        );

                        res.status(500)
                        .json({

                            error:
                                "No se pudieron leer los subtítulos generados"

                        });

                    }

                }
            );

        }

        catch (error) {

            console.error(
                error
            );

            res.status(500)
            .json({

                error:
                    error.message

            });

        }

    }
);

/*
=========================================
ARRANQUE
=========================================
*/

app.listen(
    puerto,
    () => {

        console.log(
            `Servidor iniciado en http://localhost:${puerto}`
        );

    }
);