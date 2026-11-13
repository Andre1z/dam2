let datosandrei = document.querySelector("#datosandrei")

fetch("https://jocarsa.com/iav2/productos.txt")
.then(function(resultado){return resultado.text()})
.then(function(datos){
	datosandrei.textContent = datos
})