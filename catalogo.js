const catalogo = [
     { id: 1, nombre: "Camiseta básica", precio: 15.99, categoria: "ropa", imagen: ""},
    { id: 2, nombre: "Pantalón vaquero", precio: 39.99, categoria: "ropa", imagen: "" },
    { id: 3, nombre: "Zapatillas running", precio: 89.99, categoria: "calzado", imagen: "" },
    { id: 4, nombre: "Sudadera con capucha", precio: 45.00, categoria: "ropa", imagen:  ""},
    { id: 5, nombre: "Gorra deportiva", precio: 12.50, categoria: "accesorios", imagen: "" },
    { id: 6, nombre: "Mochila urbana", precio: 35.00, categoria: "accesorios", imagen:  ""},
    { id: 7, nombre: "Calcetines pack 3", precio: 9.99, categoria: "ropa", imagen: "" },
    { id: 8, nombre: "Chanclas playa", precio: 14.99, categoria: "calzado", imagen: ""}  
];

const carrito = [
   
];
function crearCatalogo() {
  catalogo.forEach(it => {
    const figureProducto = iniciarCatalogo()
     const elementosProducto = crearProducto(it) 
     figureProducto.append(elementosProducto.nombreProducto)
     figureProducto.append(elementosProducto.etiquetaPrecio)
     figureProducto.append(elementosProducto.bot1onCompra)
     const botones = document.querySelectorAll("button")
     for (const boton of botones) {
      let contador = 0
      boton.addEventListener("click", () => {
        carrito.push({productoId: it.id, cantidad: contador})
        contador++
      })
     }
  });
  
}
function crearProducto() {
  const etiquetaPrecio = document.createElement("p")
     const nombreProducto = document.createElement("figcaption")
     const imagenProducto = document.createElement("img")
     const botonCompra = document.createElement("button")
     imagenProducto.setAttribute("src",it.imagen)
     etiquetaPrecio.innerText = `${it.precio.toFixed(2)}€`
     nombreProducto.innerText = it.nombre
     botonCompra.innerText = "Comprar"
     return {etiquetaPrecio, nombreProducto, imagenProducto, botonCompra}
}
function iniciarCatalogo() {
const section = document.querySelector("section")
     const articleProducto = document.createElement("article")
     const figureProducto = document.createElement("figure")
     section.prepend(articleProducto)
     articleProducto.prepend(figureProducto)
     return figureProducto
}
function main() {
  crearCatalogo()
}
main()
