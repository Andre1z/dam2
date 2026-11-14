let datosandrei = document.querySelector("#datosandrei")

fetch("https://static.jocarsa.com/productos/productos.txt")
.then(function(resultado){return resultado.text()})
.then(function(datos){
	datosandrei.textContent = datos
})