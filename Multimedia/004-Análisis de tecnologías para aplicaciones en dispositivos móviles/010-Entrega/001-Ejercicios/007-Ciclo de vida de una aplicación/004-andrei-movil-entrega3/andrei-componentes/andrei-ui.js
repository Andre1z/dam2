/* andrei-ui.js - Andrei Components Library */
(function(){
  "use strict";

  class AndreiControl {
    static estilosInstalados = false;

    constructor(elemento, tipo){
      this.elemento = elemento;
      this.tipo = tipo;
      this.name = elemento.getAttribute("name") || "";
      this.value = elemento.getAttribute("value") || elemento.textContent.trim() || "";
      this.placeholder = elemento.getAttribute("placeholder") || "";
      this.required = elemento.hasAttribute("required");
      this.disabled = elemento.hasAttribute("disabled");
      this.instalarEstilos();

      this.raiz = document.createElement("div");
      this.raiz.className = `andrei-control andrei-${tipo}`;
      elemento.after(this.raiz);
      elemento.remove();
    }

    instalarEstilos(){
      if(AndreiControl.estilosInstalados) return;
      AndreiControl.estilosInstalados = true;
      const style = document.createElement("style");
      style.textContent = `
        .andrei-control{width:100%;max-width:720px;font-family:Arial,sans-serif;border:1px solid #dbeafe;border-radius:10px;overflow:hidden;background:#fff;box-sizing:border-box;margin:8px 0}
        .andrei-barra{display:flex;gap:4px;flex-wrap:wrap;padding:6px;background:#eff6ff;border-bottom:1px solid #dbeafe}
        .andrei-barra button{min-width:32px;height:30px;padding:0 8px;border:1px solid #dbeafe;border-radius:10px;background:#fff;cursor:pointer}
        .andrei-barra button:hover{background:#dbeafe}.andrei-barra button.activo{background:#111827;color:#fff}
        .andrei-area{min-height:240px;padding:12px;box-sizing:border-box;outline:none;overflow:auto}
        .andrei-codigo,.andrei-markdown textarea,.andrei-texto textarea{display:block;width:100%;min-height:240px;padding:12px;border:0;outline:none;resize:vertical;box-sizing:border-box;font:14px/1.5 monospace;tab-size:2}
        .andrei-markdown .andrei-preview{min-height:240px;padding:12px;box-sizing:border-box;outline:none;overflow:auto}
        .andrei-editor .andrei-codigo{margin:0;background:#111827;color:#eff6ff;white-space:pre;overflow:auto}.andrei-editor-cuerpo{display:grid;grid-template-columns:auto 1fr;min-height:320px;background:#111827}.andrei-editor-lineas{margin:0;padding:12px 10px;min-width:42px;box-sizing:border-box;background:#111827;color:#1e40af;border-right:1px solid #111827;text-align:right;user-select:none;overflow:hidden;font:14px/1.5 monospace;white-space:pre}.andrei-editor .andrei-codigo{min-height:320px;resize:vertical;line-height:1.5}.andrei-editor-linea-actual{position:absolute;left:0;right:0;pointer-events:none;background:rgba(255,255,255,.045)}.andrei-editor-estado{margin-left:auto;padding:6px 8px;color:#1e40af;font:12px monospace}.andrei-editor-cuerpo-wrap{position:relative;display:contents}
        .andrei-editor textarea.andrei-hidden-input,.andrei-hidden-input{display:none!important}
        .andrei-firma canvas{display:block;width:100%;height:260px;background:#fff;touch-action:none;cursor:crosshair}
        .andrei-firma .andrei-firma-info{padding:6px 10px;font-size:12px;color:#1e40af;border-top:1px solid #dbeafe}
        .andrei-tabla{max-width:1000px}.andrei-tabla-controles{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:8px;background:#eff6ff;border-bottom:1px solid #dbeafe}.andrei-tabla-controles input{flex:1;min-width:180px;padding:7px;border:1px solid #dbeafe;border-radius:10px}.andrei-tabla-controles select{padding:7px}.andrei-tabla-scroll{overflow:auto}.andrei-tabla table{width:100%;border-collapse:collapse}.andrei-tabla th,.andrei-tabla td{padding:9px 10px;border-bottom:1px solid #dbeafe;text-align:left;white-space:nowrap}.andrei-tabla th{background:#eff6ff;cursor:pointer;user-select:none}.andrei-tabla th:hover{background:#dbeafe}.andrei-tabla th[data-dir=asc]::after{content:" ▲"}.andrei-tabla th[data-dir=desc]::after{content:" ▼"}.andrei-tabla-pie{display:flex;justify-content:space-between;gap:8px;align-items:center;padding:8px;font-size:13px}.andrei-tabla-paginacion{display:flex;gap:4px}.andrei-tabla-paginacion button{padding:5px 9px;border:1px solid #dbeafe;background:#fff;border-radius:10px;cursor:pointer}.andrei-tabla-paginacion button:disabled{opacity:.45;cursor:default}
        .andrei-arbol{max-width:720px;padding:8px}.andrei-arbol ul{list-style:none;margin:0;padding-left:20px}.andrei-arbol>ul{padding-left:0}.andrei-arbol li{position:relative}.andrei-arbol-nodo{display:flex;align-items:center;gap:6px;padding:5px 7px;border-radius:10px;cursor:pointer;user-select:none}.andrei-arbol-nodo:hover{background:#eff6ff}.andrei-arbol-nodo.seleccionado{background:#dbeafe}.andrei-arbol-toggle{width:18px;text-align:center;font-family:monospace}.andrei-arbol li.cerrado>ul{display:none}.andrei-arbol-icono{width:18px;text-align:center}
        .andrei-calendario{max-width:520px}.andrei-cal-cabecera{display:grid;grid-template-columns:42px 1fr 42px;align-items:center;gap:8px;padding:10px;background:#eff6ff;border-bottom:1px solid #dbeafe}.andrei-cal-cabecera button{height:34px;border:1px solid #dbeafe;border-radius:10px;background:#fff;cursor:pointer;font-size:20px}.andrei-cal-titulo{text-align:center;font-weight:bold;text-transform:capitalize}.andrei-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));padding:8px;gap:3px}.andrei-cal-dia-semana{text-align:center;font-weight:bold;font-size:12px;color:#1e40af;padding:5px}.andrei-cal-dia{aspect-ratio:1;min-height:42px;display:flex;align-items:center;justify-content:center;border-radius:10px;cursor:pointer;user-select:none;border:1px solid transparent}.andrei-cal-dia:hover{background:#eff6ff;border-color:#dbeafe}.andrei-cal-dia.otro-mes{color:#dbeafe}.andrei-cal-dia.hoy{border-color:#111827;font-weight:bold}.andrei-cal-dia.seleccionado{background:#111827;color:#fff}.andrei-cal-dia.seleccionado.otro-mes{color:#fff}.andrei-cal-valor{padding:8px 12px;border-top:1px solid #dbeafe;font:13px monospace;color:#111827}
        .andrei-semana{max-width:1000px}.andrei-semana-cabecera{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:9px;background:#eff6ff;border-bottom:1px solid #dbeafe}.andrei-semana-cabecera strong{text-align:center}.andrei-semana-cabecera button{padding:7px 10px;border:1px solid #dbeafe;border-radius:10px;background:#fff;cursor:pointer}.andrei-semana-scroll{overflow:auto;max-height:620px}.andrei-semana-grid{display:grid;grid-template-columns:72px repeat(7,minmax(105px,1fr));min-width:820px}.andrei-semana-dia{position:sticky;top:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:48px;padding:5px;background:#eff6ff;border-right:1px solid #dbeafe;border-bottom:1px solid #dbeafe;box-sizing:border-box}.andrei-semana-esquina{left:0;z-index:4}.andrei-semana-hora{position:sticky;left:0;z-index:1;display:flex;align-items:flex-start;justify-content:center;min-height:34px;padding:6px 4px;background:#eff6ff;border-right:1px solid #dbeafe;border-bottom:1px solid #eff6ff;box-sizing:border-box;font:12px monospace;color:#111827}.andrei-semana-slot{min-height:34px;border-right:1px solid #eff6ff;border-bottom:1px solid #eff6ff;box-sizing:border-box;cursor:pointer}.andrei-semana-slot:hover{background:#eff6ff}.andrei-semana-slot.seleccionado{background:#111827;box-shadow:inset 0 0 0 2px #111827}.andrei-semana-valor{padding:8px 12px;border-top:1px solid #dbeafe;font:13px monospace;color:#111827}

        .andrei-input{max-width:520px;overflow:visible;border:0;background:transparent;margin:8px 0}.andrei-input-envoltura{display:flex;align-items:stretch;width:100%;min-height:44px;border:1px solid #dbeafe;border-radius:10px;background:#fff;overflow:hidden;box-sizing:border-box;transition:border-color .15s,box-shadow .15s}.andrei-input-envoltura:focus-within{border-color:#111827;box-shadow:0 0 0 2px rgba(17,24,39,.08)}.andrei-input-icono{width:46px;flex:0 0 46px;display:flex;align-items:center;justify-content:center;background:#eff6ff;border-right:1px solid #dbeafe;font:700 18px/1 Arial,sans-serif;color:#111827;user-select:none;filter:grayscale(1)}.andrei-input-campo{flex:1;min-width:0;border:0!important;outline:0!important;background:transparent!important;padding:10px 12px!important;margin:0!important;box-shadow:none!important;font:15px Arial,sans-serif;color:#111827}.andrei-input-campo::placeholder{color:#1e40af}.andrei-input-tipo{display:flex;align-items:center;padding:0 10px;color:#1e40af;font-size:10px;text-transform:uppercase;letter-spacing:.06em;user-select:none}.andrei-input-envoltura.invalido{border-color:#f97316}.andrei-input-envoltura.invalido .andrei-input-icono{background:#ffffff}.andrei-input-envoltura.valido:not(.vacio) .andrei-input-icono{background:#eff6ff}.andrei-input[aria-disabled=true]{opacity:.55}.andrei-input .andrei-input-campo[type=color]{height:44px;padding:7px!important;cursor:pointer}.andrei-input .andrei-input-campo[type=range]{padding:0 12px!important}.andrei-input-ayuda{padding:4px 2px 0 48px;font-size:11px;color:#1e40af}
        .andrei-hora{max-width:520px}.andrei-reloj-wrap{display:flex;align-items:center;justify-content:center;padding:18px}.andrei-reloj{display:block;width:min(420px,100%);height:auto;aspect-ratio:1;touch-action:none;cursor:crosshair}.andrei-hora-valor{text-align:center;padding:8px;font:bold 22px monospace;border-top:1px solid #eff6ff}.andrei-hora-leyenda{display:flex;justify-content:center;gap:20px;padding:0 10px 12px;color:#1e40af;font-size:12px}.andrei-hora-leyenda span::before{content:"";display:inline-block;width:9px;height:9px;margin-right:5px;border-radius:50%;background:#111827}
      `;
      document.head.appendChild(style);
    }

    barra(){
      const barra = document.createElement("div");
      barra.className = "andrei-barra";
      this.raiz.appendChild(barra);
      return barra;
    }

    boton(barra, texto, fn, titulo=""){
      const b = document.createElement("button");
      b.type = "button";
      b.innerHTML = texto;
      b.title = titulo;
      b.addEventListener("click", fn);
      barra.appendChild(b);
      return b;
    }

    campoOculto(tipo="textarea"){
      const campo = document.createElement(tipo);
      campo.className = "andrei-hidden-input";
      if(this.name) campo.name = this.name;
      if(this.required) campo.required = true;
      if(this.disabled) campo.disabled = true;
      campo.value = this.value;
      this.raiz.appendChild(campo);
      this.campo = campo;
      return campo;
    }

    setValue(valor){
      this.value = valor;
      if(this.campo) this.campo.value = valor;
      this.raiz.dispatchEvent(new CustomEvent("andrei-change", {detail:{value:valor}}));
    }
  }

  class AndreiTexto extends AndreiControl {
    constructor(elemento){
      super(elemento,"texto");
      const barra = this.barra();
      const editor = document.createElement("article");
      editor.className = "andrei-area";
      editor.contentEditable = !this.disabled;
      editor.innerHTML = this.value;
      if(this.placeholder) editor.dataset.placeholder = this.placeholder;
      this.raiz.appendChild(editor);

      const codigo = document.createElement("textarea");
      codigo.style.display = "none";
      codigo.value = this.value;
      if(this.name) codigo.name = this.name;
      if(this.required) codigo.required = true;
      this.raiz.appendChild(codigo);
      this.campo = codigo;

      const cmd=(t,c,v=null)=>this.boton(barra,t,()=>{editor.focus();document.execCommand(c,false,v);sync();});
      cmd("<b>B</b>","bold"); cmd("<i>I</i>","italic"); cmd("<u>U</u>","underline");
      cmd("H1","formatBlock","h1"); cmd("H2","formatBlock","h2"); cmd("P","formatBlock","p");
      cmd("•","insertUnorderedList"); cmd("1.","insertOrderedList");
      cmd("←","justifyLeft"); cmd("↔","justifyCenter"); cmd("→","justifyRight");
      cmd("↶","undo"); cmd("↷","redo");
      this.boton(barra,"🔗",()=>{const u=prompt("Introduce la URL:");if(u){editor.focus();document.execCommand("createLink",false,u);sync();}});
      this.boton(barra,"Tx",()=>{editor.focus();document.execCommand("removeFormat",false,null);sync();});
      this.boton(barra,"&lt;/&gt;",()=>{
        const verCodigo = codigo.style.display === "none";
        if(verCodigo){sync(); editor.style.display="none"; codigo.style.display="block";}
        else{editor.innerHTML=codigo.value; editor.style.display="block"; codigo.style.display="none"; sync();}
      },"Ver HTML");

      const sync=()=>this.setValue(editor.innerHTML);
      editor.addEventListener("input",sync);
      codigo.addEventListener("input",()=>{this.value=codigo.value;});
    }
  }

  class AndreiMarkdown extends AndreiControl {
    constructor(elemento){
      super(elemento,"markdown");
      const barra=this.barra();
      const preview=document.createElement("div");
      preview.className="andrei-preview";
      preview.contentEditable=!this.disabled;
      const codigo=document.createElement("textarea");
      codigo.value=this.value;
      if(this.name) codigo.name=this.name;
      if(this.required) codigo.required=true;
      codigo.style.display="none";
      this.raiz.append(preview,codigo);
      this.campo=codigo;

      const escapar=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      const render=md=>{
        let h=escapar(md);
        h=h.replace(/^### (.*)$/gm,"<h3>$1</h3>").replace(/^## (.*)$/gm,"<h2>$1</h2>").replace(/^# (.*)$/gm,"<h1>$1</h1>");
        h=h.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>");
        h=h.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>');
        h=h.replace(/^[-*] (.*)$/gm,"<li>$1</li>");
        h=h.replace(/(?:<li>.*<\/li>\n?)+/g,m=>"<ul>"+m+"</ul>");
        return h.split(/\n{2,}/).map(x=>/^<(h\d|ul|ol|blockquote)/.test(x)?x:`<p>${x.replace(/\n/g,"<br>")}</p>`).join("");
      };
      const htmlAMarkdown=()=>{
        let h=preview.innerHTML;
        h=h.replace(/<h1[^>]*>(.*?)<\/h1>/gi,"# $1\n\n").replace(/<h2[^>]*>(.*?)<\/h2>/gi,"## $1\n\n").replace(/<h3[^>]*>(.*?)<\/h3>/gi,"### $1\n\n");
        h=h.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi,"**$2**").replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi,"*$2*");
        h=h.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi,"[$2]($1)");
        h=h.replace(/<li[^>]*>(.*?)<\/li>/gi,"- $1\n").replace(/<br\s*\/?\s*>/gi,"\n").replace(/<\/p>/gi,"\n\n").replace(/<p[^>]*>/gi,"");
        const tmp=document.createElement("div"); tmp.innerHTML=h; return tmp.textContent.replace(/\n{3,}/g,"\n\n").trim();
      };
      const syncPreview=()=>{codigo.value=htmlAMarkdown();this.value=codigo.value;};
      const envolver=(a,b=a)=>{const s=codigo.selectionStart,e=codigo.selectionEnd,t=codigo.value;codigo.value=t.slice(0,s)+a+t.slice(s,e)+b+t.slice(e);codigo.focus();codigo.selectionStart=s+a.length;codigo.selectionEnd=e+a.length;this.setValue(codigo.value);};
      this.boton(barra,"<b>B</b>",()=>envolver("**")); this.boton(barra,"<i>I</i>",()=>envolver("*"));
      this.boton(barra,"H1",()=>envolver("# ","")); this.boton(barra,"H2",()=>envolver("## ",""));
      this.boton(barra,"🔗",()=>{const u=prompt("Introduce la URL:");if(u) envolver("[","]("+u+")");});
      this.boton(barra,"MD",()=>{
        if(codigo.style.display==="none"){syncPreview();preview.style.display="none";codigo.style.display="block";}
        else{this.setValue(codigo.value);preview.innerHTML=render(codigo.value);codigo.style.display="none";preview.style.display="block";}
      },"Código Markdown / WYSIWYG");
      preview.innerHTML=render(this.value);
      preview.addEventListener("input",syncPreview);
      codigo.addEventListener("input",()=>{this.value=codigo.value;});
    }
  }

  class AndreiEditor extends AndreiControl {
    constructor(elemento){
      super(elemento,"editor");
      const barra=this.barra();
      const lenguaje=elemento.getAttribute("language")||elemento.getAttribute("lenguaje")||"texto";
      const tabSize=Math.max(1,Number(elemento.getAttribute("tab-size")||2));
      const etiqueta=document.createElement("span"); etiqueta.textContent=lenguaje; etiqueta.style.padding="6px"; barra.appendChild(etiqueta);
      const estado=document.createElement("span"); estado.className="andrei-editor-estado"; barra.appendChild(estado);
      this.boton(barra,"Copiar",()=>navigator.clipboard?.writeText(codigo.value));

      const cuerpo=document.createElement("div"); cuerpo.className="andrei-editor-cuerpo";
      const lineas=document.createElement("pre"); lineas.className="andrei-editor-lineas";
      const codigo=document.createElement("textarea");
      codigo.className="andrei-codigo"; codigo.spellcheck=false; codigo.value=this.value; codigo.placeholder=this.placeholder; codigo.style.tabSize=tabSize;
      if(this.name) codigo.name=this.name; if(this.required) codigo.required=true; if(this.disabled) codigo.disabled=true;
      cuerpo.append(lineas,codigo); this.raiz.appendChild(cuerpo); this.campo=codigo;

      const actualizar=()=>{
        const total=Math.max(1,codigo.value.split("\n").length);
        lineas.textContent=Array.from({length:total},(_,i)=>i+1).join("\n");
        const pos=codigo.selectionStart, antes=codigo.value.slice(0,pos), partes=antes.split("\n");
        const ln=partes.length, col=partes[partes.length-1].length+1;
        estado.textContent=`Ln ${ln}, Col ${col} · ${total} líneas · Tab ${tabSize}`;
        this.setValue(codigo.value);
      };
      codigo.addEventListener("scroll",()=>{lineas.scrollTop=codigo.scrollTop});
      codigo.addEventListener("input",actualizar);
      codigo.addEventListener("click",actualizar);
      codigo.addEventListener("keyup",actualizar);
      codigo.addEventListener("keydown",e=>{
        if(e.key==="Tab"){
          e.preventDefault(); const s=codigo.selectionStart,en=codigo.selectionEnd, sangria=" ".repeat(tabSize);
          if(s===en){codigo.setRangeText(sangria,s,en,"end");}
          else{
            const inicio=codigo.value.lastIndexOf("\n",s-1)+1, finLinea=codigo.value.indexOf("\n",en), fin=finLinea<0?codigo.value.length:finLinea;
            const bloque=codigo.value.slice(inicio,fin);
            if(e.shiftKey){const re=new RegExp(`^ {1,${tabSize}}`,`gm`);codigo.setRangeText(bloque.replace(re,""),inicio,fin,"select");}
            else codigo.setRangeText(bloque.replace(/^/gm,sangria),inicio,fin,"select");
          }
          actualizar();
        }
      });
      actualizar();
    }
  }

  class AndreiFirma extends AndreiControl {
    constructor(elemento){
      super(elemento,"firma");
      const barra=this.barra();
      const canvas=document.createElement("canvas");
      const info=document.createElement("div"); info.className="andrei-firma-info"; info.textContent="Firma dentro del recuadro";
      this.raiz.append(canvas,info);
      const campo=this.campoOculto("textarea");
      const ctx=canvas.getContext("2d"); let dibujando=false, ultimo=null;
      const ajustar=()=>{const r=canvas.getBoundingClientRect(),d=window.devicePixelRatio||1;canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);ctx.setTransform(d,0,0,d,0,0);ctx.lineWidth=2;ctx.lineCap="round";ctx.lineJoin="round";};
      ajustar();
      const punto=e=>{const r=canvas.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:p.clientX-r.left,y:p.clientY-r.top};};
      const inicio=e=>{e.preventDefault();dibujando=true;ultimo=punto(e);};
      const mover=e=>{if(!dibujando)return;e.preventDefault();const p=punto(e);ctx.beginPath();ctx.moveTo(ultimo.x,ultimo.y);ctx.lineTo(p.x,p.y);ctx.stroke();ultimo=p;};
      const fin=()=>{if(!dibujando)return;dibujando=false;this.setValue(canvas.toDataURL("image/png"));};
      canvas.addEventListener("pointerdown",inicio); canvas.addEventListener("pointermove",mover); window.addEventListener("pointerup",fin);
      this.boton(barra,"Limpiar",()=>{ctx.clearRect(0,0,canvas.width,canvas.height);this.setValue("");});
    }
  }

  class AndreiTabla extends AndreiControl {
    constructor(elemento){
      const tablaOriginal=elemento.querySelector("table");
      const html=tablaOriginal ? tablaOriginal.outerHTML : elemento.innerHTML;
      super(elemento,"tabla");
      this.raiz.innerHTML=html;
      const tabla=this.raiz.querySelector("table");
      if(!tabla) return;
      const filas=[...tabla.tBodies].flatMap(tb=>[...tb.rows]);
      const controles=document.createElement("div"); controles.className="andrei-tabla-controles";
      const buscar=document.createElement("input"); buscar.type="search"; buscar.placeholder="Buscar...";
      const etiqueta=document.createElement("span"); etiqueta.textContent="Filas:";
      const cantidad=document.createElement("select"); [5,10,25,50,100].forEach(n=>{const o=document.createElement("option");o.value=n;o.textContent=n;if(n===10)o.selected=true;cantidad.appendChild(o)});
      controles.append(buscar,etiqueta,cantidad); this.raiz.insertBefore(controles,tabla);
      const scroll=document.createElement("div"); scroll.className="andrei-tabla-scroll"; tabla.before(scroll); scroll.appendChild(tabla);
      const pie=document.createElement("div"); pie.className="andrei-tabla-pie"; const info=document.createElement("span"), pag=document.createElement("div"); pag.className="andrei-tabla-paginacion"; pie.append(info,pag); this.raiz.appendChild(pie);
      let pagina=1,orden=-1,direccion=1;
      const valor=v=>{const t=v.trim().replace(",",".");return t!==""&&!isNaN(t)?Number(t):v.trim().toLocaleLowerCase("es")};
      const pintar=()=>{
        let visibles=filas.filter(f=>f.textContent.toLocaleLowerCase("es").includes(buscar.value.toLocaleLowerCase("es")));
        if(orden>=0) visibles.sort((a,b)=>{let x=valor(a.cells[orden]?.textContent||""),y=valor(b.cells[orden]?.textContent||"");return (x<y?-1:x>y?1:0)*direccion});
        filas.forEach(f=>f.style.display="none"); const por=Number(cantidad.value), total=Math.max(1,Math.ceil(visibles.length/por)); pagina=Math.min(pagina,total); const ini=(pagina-1)*por; visibles.slice(ini,ini+por).forEach(f=>f.style.display="");
        info.textContent=`Mostrando ${visibles.length?ini+1:0}-${Math.min(ini+por,visibles.length)} de ${visibles.length}`; pag.innerHTML="";
        const mk=(txt,fn,dis=false)=>{const b=document.createElement("button");b.type="button";b.textContent=txt;b.disabled=dis;b.onclick=fn;pag.appendChild(b)}; mk("‹",()=>{pagina--;pintar()},pagina<=1); const n=document.createElement("span");n.style.padding="5px";n.textContent=`${pagina} / ${total}`;pag.appendChild(n);mk("›",()=>{pagina++;pintar()},pagina>=total);
      };
      tabla.querySelectorAll("thead th").forEach((th,i)=>th.addEventListener("click",()=>{tabla.querySelectorAll("thead th").forEach(x=>delete x.dataset.dir);if(orden===i)direccion*=-1;else{orden=i;direccion=1}th.dataset.dir=direccion===1?"asc":"desc";pagina=1;pintar()}));
      buscar.addEventListener("input",()=>{pagina=1;pintar()}); cantidad.addEventListener("change",()=>{pagina=1;pintar()}); pintar();
    }
  }

  class AndreiArbol extends AndreiControl {
    constructor(elemento){
      const html=elemento.innerHTML; super(elemento,"arbol"); this.raiz.innerHTML=html;
      this.raiz.querySelectorAll("li").forEach(li=>{
        const hijos=[...li.children]; const sub=hijos.find(x=>x.tagName==="UL"); const textos=[...li.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join(" ").trim();
        [...li.childNodes].filter(n=>n.nodeType===3).forEach(n=>n.remove());
        const nodo=document.createElement("div");nodo.className="andrei-arbol-nodo"; const toggle=document.createElement("span");toggle.className="andrei-arbol-toggle";toggle.textContent=sub?"▼":""; const icon=document.createElement("span");icon.className="andrei-arbol-icono";icon.textContent=sub?"📁":"📄"; const label=document.createElement("span");label.textContent=textos||li.getAttribute("data-label")||"Nodo"; nodo.append(toggle,icon,label);li.insertBefore(nodo,li.firstChild);
        if(sub){toggle.onclick=e=>{e.stopPropagation();li.classList.toggle("cerrado");toggle.textContent=li.classList.contains("cerrado")?"▶":"▼";icon.textContent=li.classList.contains("cerrado")?"📁":"📂"}}
        nodo.onclick=()=>{this.raiz.querySelectorAll(".andrei-arbol-nodo").forEach(n=>n.classList.remove("seleccionado"));nodo.classList.add("seleccionado");this.setValue(label.textContent)};
      });
      if(this.name)this.campoOculto("input");
    }
  }

  class AndreiCalendario extends AndreiControl {
    constructor(elemento){
      super(elemento,"calendario");
      const inicial=this.parseFecha(this.value)||new Date();
      this.seleccion=this.parseFecha(this.value);
      this.vista=new Date(inicial.getFullYear(),inicial.getMonth(),1);
      const cab=document.createElement("div");cab.className="andrei-cal-cabecera";
      const ant=document.createElement("button");ant.type="button";ant.textContent="‹";
      const titulo=document.createElement("span");titulo.className="andrei-cal-titulo";
      const sig=document.createElement("button");sig.type="button";sig.textContent="›";cab.append(ant,titulo,sig);this.raiz.appendChild(cab);
      const grid=document.createElement("div");grid.className="andrei-cal-grid";this.raiz.appendChild(grid);
      const valor=document.createElement("div");valor.className="andrei-cal-valor";this.raiz.appendChild(valor);
      this.campoOculto("input");
      const pintar=()=>{
        titulo.textContent=this.vista.toLocaleDateString("es-ES",{month:"long",year:"numeric"});grid.innerHTML="";
        ["L","M","X","J","V","S","D"].forEach(x=>{const d=document.createElement("div");d.className="andrei-cal-dia-semana";d.textContent=x;grid.appendChild(d)});
        const y=this.vista.getFullYear(),m=this.vista.getMonth(),primero=new Date(y,m,1),offset=(primero.getDay()+6)%7;
        const inicio=new Date(y,m,1-offset),hoy=new Date();
        for(let i=0;i<42;i++){const f=new Date(inicio);f.setDate(inicio.getDate()+i);const d=document.createElement("div");d.className="andrei-cal-dia";d.textContent=f.getDate();if(f.getMonth()!==m)d.classList.add("otro-mes");if(this.igualDia(f,hoy))d.classList.add("hoy");if(this.seleccion&&this.igualDia(f,this.seleccion))d.classList.add("seleccionado");d.onclick=()=>{this.seleccion=new Date(f);this.vista=new Date(f.getFullYear(),f.getMonth(),1);this.setValue(this.formato(f));valor.textContent=this.value;pintar()};grid.appendChild(d)}
        valor.textContent=this.seleccion?this.formato(this.seleccion):"Sin fecha seleccionada";
      };
      ant.onclick=()=>{this.vista.setMonth(this.vista.getMonth()-1);pintar()};sig.onclick=()=>{this.vista.setMonth(this.vista.getMonth()+1);pintar()};pintar();
    }
    parseFecha(v){if(!/^\d{4}-\d{2}-\d{2}$/.test(v||""))return null;const [y,m,d]=v.split("-").map(Number);return new Date(y,m-1,d)}
    formato(f){return `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`}
    igualDia(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}
  }

  class AndreiSemana extends AndreiControl {
    constructor(elemento){
      super(elemento,"semana");
      this.inicio=elemento.getAttribute("inicio")||"08:00";this.fin=elemento.getAttribute("fin")||"20:00";this.intervalo=Math.max(5,Number(elemento.getAttribute("intervalo"))||30);
      const base=this.parseValor(this.value)?.fecha||new Date();this.lunes=this.obtenerLunes(base);
      const cab=document.createElement("div");cab.className="andrei-semana-cabecera";const ant=document.createElement("button");ant.type="button";ant.textContent="‹ Semana";const titulo=document.createElement("strong");const sig=document.createElement("button");sig.type="button";sig.textContent="Semana ›";cab.append(ant,titulo,sig);this.raiz.appendChild(cab);
      const scroll=document.createElement("div");scroll.className="andrei-semana-scroll";const grid=document.createElement("div");grid.className="andrei-semana-grid";scroll.appendChild(grid);this.raiz.appendChild(scroll);const valor=document.createElement("div");valor.className="andrei-semana-valor";this.raiz.appendChild(valor);this.campoOculto("input");
      const minutos=s=>{const [h,m]=s.split(":").map(Number);return h*60+m}, fmt=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;
      const pintar=()=>{grid.innerHTML="";const finSemana=new Date(this.lunes);finSemana.setDate(finSemana.getDate()+6);titulo.textContent=`${this.fechaCorta(this.lunes)} — ${this.fechaCorta(finSemana)}`;const esquina=document.createElement("div");esquina.className="andrei-semana-dia andrei-semana-esquina";grid.appendChild(esquina);for(let d=0;d<7;d++){const f=new Date(this.lunes);f.setDate(f.getDate()+d);const c=document.createElement("div");c.className="andrei-semana-dia";c.innerHTML=`<strong>${f.toLocaleDateString("es-ES",{weekday:"short"})}</strong>${f.getDate()}/${f.getMonth()+1}`;grid.appendChild(c)}
        for(let t=minutos(this.inicio);t<minutos(this.fin);t+=this.intervalo){const h=document.createElement("div");h.className="andrei-semana-hora";h.textContent=fmt(t);grid.appendChild(h);for(let d=0;d<7;d++){const f=new Date(this.lunes);f.setDate(f.getDate()+d);const v=`${this.formatoFecha(f)} ${fmt(t)}`;const slot=document.createElement("div");slot.className="andrei-semana-slot";slot.title=v;if(this.value===v)slot.classList.add("seleccionado");slot.onclick=()=>{this.setValue(v);valor.textContent=v;pintar()};grid.appendChild(slot)}}valor.textContent=this.value||"Sin slot seleccionado";
      };
      ant.onclick=()=>{this.lunes.setDate(this.lunes.getDate()-7);pintar()};sig.onclick=()=>{this.lunes.setDate(this.lunes.getDate()+7);pintar()};pintar();
    }
    parseValor(v){const m=(v||"").match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/);if(!m)return null;return{fecha:new Date(+m[1],+m[2]-1,+m[3])}}
    obtenerLunes(f){const x=new Date(f.getFullYear(),f.getMonth(),f.getDate()),dia=(x.getDay()+6)%7;x.setDate(x.getDate()-dia);return x}
    formatoFecha(f){return `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`}
    fechaCorta(f){return f.toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"})}
  }

  class AndreiHora extends AndreiControl {
    constructor(elemento){
      super(elemento,"hora");
      const m=(this.value||"").match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);this.h=m?Math.min(23,+m[1]):0;this.mi=m?Math.min(59,+m[2]):0;this.s=m?Math.min(59,+(m[3]||0)):0;
      const wrap=document.createElement("div");wrap.className="andrei-reloj-wrap";const canvas=document.createElement("canvas");canvas.className="andrei-reloj";canvas.width=420;canvas.height=420;wrap.appendChild(canvas);this.raiz.appendChild(wrap);const valor=document.createElement("div");valor.className="andrei-hora-valor";const leyenda=document.createElement("div");leyenda.className="andrei-hora-leyenda";leyenda.innerHTML="<span>Horas</span><span>Minutos</span><span>Segundos</span>";this.raiz.append(valor,leyenda);this.campoOculto("input");const ctx=canvas.getContext("2d");let arrastrando=false,anillo=null;
      const actualizar=()=>{const v=`${String(this.h).padStart(2,"0")}:${String(this.mi).padStart(2,"0")}:${String(this.s).padStart(2,"0")}`;valor.textContent=v;this.setValue(v);dibujar()};
      const punto=e=>{const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}};
      const elegir=p=>{const cx=210,cy=210,dx=p.x-cx,dy=p.y-cy,r=Math.hypot(dx,dy);if(r<42||r>205)return null;const anillos=[{tipo:"h",radio:175,max:24},{tipo:"mi",radio:120,max:60},{tipo:"s",radio:70,max:60}];const elegido=anillos.reduce((a,b)=>Math.abs(r-b.radio)<Math.abs(r-a.radio)?b:a);if(Math.abs(r-elegido.radio)>32)return null;const ang=(Math.atan2(dy,dx)+Math.PI/2+Math.PI*2)%(Math.PI*2),n=Math.round(ang/(Math.PI*2)*elegido.max)%elegido.max;this[elegido.tipo]=n;return elegido.tipo};
      const dibujar=()=>{ctx.clearRect(0,0,420,420);const cx=210,cy=210;[[175,24,this.h,"Horas"],[120,60,this.mi,"Min"],[70,60,this.s,"Seg"]].forEach(([r,max,val])=>{ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.lineWidth=18;ctx.strokeStyle="#eff6ff";ctx.stroke();const a=val/max*Math.PI*2-Math.PI/2;ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,a);ctx.strokeStyle="#111827";ctx.stroke();const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.fillStyle="#111827";ctx.fill();ctx.fillStyle="#1e40af";ctx.font="12px Arial";ctx.textAlign="center";ctx.fillText(String(val).padStart(2,"0"),cx,cy+(r===175?-150:r===120?-95:-45))});ctx.fillStyle="#111827";ctx.font="bold 25px monospace";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(`${String(this.h).padStart(2,"0")}:${String(this.mi).padStart(2,"0")}:${String(this.s).padStart(2,"0")}`,cx,cy)};
      canvas.addEventListener("pointerdown",e=>{e.preventDefault();arrastrando=true;canvas.setPointerCapture(e.pointerId);anillo=elegir(punto(e));if(anillo)actualizar()});canvas.addEventListener("pointermove",e=>{if(!arrastrando||!anillo)return;e.preventDefault();const p=punto(e),cx=210,cy=210,ang=(Math.atan2(p.y-cy,p.x-cx)+Math.PI/2+Math.PI*2)%(Math.PI*2),max=anillo==="h"?24:60;this[anillo]=Math.round(ang/(Math.PI*2)*max)%max;actualizar()});canvas.addEventListener("pointerup",()=>{arrastrando=false;anillo=null});canvas.addEventListener("pointercancel",()=>{arrastrando=false;anillo=null});actualizar();
    }
  }


  class AndreiInput extends AndreiControl {
    static tipos = {
      text:     {emoji:"T", native:"text", label:"texto"},
      nombre:   {emoji:"♙", native:"text", label:"nombre", autocomplete:"name"},
      usuario:  {emoji:"@", native:"text", label:"usuario", autocomplete:"username"},
      email:    {emoji:"✉", native:"email", label:"email", autocomplete:"email"},
      password: {emoji:"●", native:"password", label:"contraseña", autocomplete:"current-password"},
      tel:      {emoji:"☎", native:"tel", label:"teléfono", autocomplete:"tel"},
      url:      {emoji:"⌁", native:"url", label:"url"},
      search:   {emoji:"⌕", native:"search", label:"búsqueda"},
      integer:  {emoji:"#", native:"number", label:"entero", step:"1", inputmode:"numeric"},
      number:   {emoji:"№", native:"number", label:"número", inputmode:"decimal"},
      decimal:  {emoji:".0", native:"number", label:"decimal", step:"any", inputmode:"decimal"},
      moneda:   {emoji:"€", native:"number", label:"importe", step:"0.01", inputmode:"decimal"},
      porcentaje:{emoji:"%", native:"number", label:"porcentaje", step:"any", inputmode:"decimal"},
      postal:   {emoji:"▣", native:"text", label:"c. postal", inputmode:"numeric", autocomplete:"postal-code"},
      dni:      {emoji:"ID", native:"text", label:"documento"},
      date:     {emoji:"□", native:"date", label:"fecha"},
      time:     {emoji:"◷", native:"time", label:"hora"},
      "datetime-local":{emoji:"◫", native:"datetime-local", label:"fecha/hora"},
      month:    {emoji:"M", native:"month", label:"mes"},
      week:     {emoji:"W", native:"week", label:"semana"},
      color:    {emoji:"◐", native:"color", label:"color"},
      range:    {emoji:"↔", native:"range", label:"rango"}
    };

    constructor(elemento){
      super(elemento,"input");
      const solicitado=(elemento.getAttribute("type")||"text").toLowerCase();
      const cfg=AndreiInput.tipos[solicitado]||AndreiInput.tipos.text;
      this.raiz.dataset.type=solicitado;
      this.raiz.setAttribute("aria-disabled",this.disabled?"true":"false");

      const envoltura=document.createElement("div"); envoltura.className="andrei-input-envoltura";
      const icono=document.createElement("span"); icono.className="andrei-input-icono"; icono.textContent=elemento.getAttribute("emoji")||cfg.emoji; icono.title=`Tipo esperado: ${cfg.label}`;
      const campo=document.createElement("input"); campo.className="andrei-input-campo"; campo.type=cfg.native;
      if(this.name) campo.name=this.name;
      campo.value=this.value;
      campo.placeholder=this.placeholder||elemento.getAttribute("label")||`Introduce ${cfg.label}`;
      campo.required=this.required; campo.disabled=this.disabled;
      ["min","max","minlength","maxlength","pattern","autocomplete","step"].forEach(a=>{if(elemento.hasAttribute(a))campo.setAttribute(a,elemento.getAttribute(a));});
      if(!elemento.hasAttribute("step")&&cfg.step)campo.step=cfg.step;
      if(!elemento.hasAttribute("autocomplete")&&cfg.autocomplete)campo.autocomplete=cfg.autocomplete;
      if(cfg.inputmode)campo.inputMode=cfg.inputmode;
      const tipo=document.createElement("span"); tipo.className="andrei-input-tipo"; tipo.textContent=elemento.getAttribute("etiqueta-tipo")||cfg.label;
      envoltura.append(icono,campo,tipo); this.raiz.appendChild(envoltura); this.campo=campo;
      const ayuda=elemento.getAttribute("ayuda"); if(ayuda){const a=document.createElement("div");a.className="andrei-input-ayuda";a.textContent=ayuda;this.raiz.appendChild(a);}
      const estado=()=>{this.value=campo.value;envoltura.classList.toggle("vacio",!campo.value);envoltura.classList.toggle("valido",campo.checkValidity());envoltura.classList.toggle("invalido",!!campo.value&&!campo.checkValidity());this.raiz.dispatchEvent(new CustomEvent("andrei-change",{detail:{value:this.value,type:solicitado}}));};
      campo.addEventListener("input",estado); campo.addEventListener("change",estado); estado();
    }
  }

  class Andrei {
    static controles={
      "andrei-input":AndreiInput,
      "andrei-texto":AndreiTexto,
      "andrei-markdown":AndreiMarkdown,
      "andrei-editor":AndreiEditor,
      "andrei-firma":AndreiFirma,
      "andrei-tabla":AndreiTabla,
      "andrei-arbol":AndreiArbol,
      "andrei-calendario":AndreiCalendario,
      "andrei-semana":AndreiSemana,
      "andrei-hora":AndreiHora
    };
    static iniciar(){
      Object.entries(this.controles).forEach(([selector,Clase])=>document.querySelectorAll(selector).forEach(el=>new Clase(el)));
    }
  }

  window.Andrei=Andrei;
  window.AndreiControl=AndreiControl;
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",()=>Andrei.iniciar()); else Andrei.iniciar();
})();
