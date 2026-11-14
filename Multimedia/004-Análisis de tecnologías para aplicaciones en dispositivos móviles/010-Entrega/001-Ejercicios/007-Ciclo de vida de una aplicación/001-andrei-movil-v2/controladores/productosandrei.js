const salida=contenedor.querySelector('#datosandrei');const abort=new AbortController();
async function cargar(){salida.textContent='Cargando productos…';try{const datos=await AndreiAPI.get('https://static.jocarsa.com/productos/productos.txt',{responseType:'text',signal:abort.signal,retries:2,timeout:10000});salida.textContent=datos;AndreiToast.success('Productos recibidos');}catch(e){if(abort.signal.aborted)return;salida.textContent='No se pudieron cargar los productos: '+e.message;AndreiToast.error(e.message);}}
cargar();return ()=>abort.abort();
