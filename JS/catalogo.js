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
     dibujarProducto(figureProducto,elementosProducto)
     });
  
}
function activarBotones() {
  const botones = document.querySelectorAll("button")
  for (const boton of botones) {
    let contador = 0
    boton.addEventListener("click", () => {
      contador++
      carrito.push({productoId: boton.id, cantidad: contador})
      mostrarCarrito()
    })
  }
  }
  function crearProducto(it) {
    const etiquetaPrecio = document.createElement("p")
    etiquetaPrecio.classList.add("producto__precio")
    const nombreProducto = document.createElement("figcaption")
    nombreProducto.classList.add("producto__nombre")
    const imagenProducto = document.createElement("img")
    imagenProducto.classList.add("producto__imagen")
    const botonCompra = document.createElement("button")
    botonCompra.classList.add("producto__boton")
    imagenProducto.setAttribute("src",it.imagen)
    botonCompra.setAttribute("id", `${it.id}`)
    etiquetaPrecio.innerText = `${it.precio.toFixed(2)}€`
    nombreProducto.innerText = it.nombre
    botonCompra.innerText = "Comprar"
    return {etiquetaPrecio, nombreProducto, imagenProducto, botonCompra}
  }
  function dibujarProducto(figureProducto, elementosProducto) {
    figureProducto.append(elementosProducto.nombreProducto)
    figureProducto.append(elementosProducto.etiquetaPrecio)
    figureProducto.append(elementosProducto.botonCompra)
  }
  function iniciarCatalogo() {
    const section = document.querySelector(".catalogo")
    const articleProducto = document.createElement("article")
    articleProducto.classList.add("producto")
    const figureProducto = document.createElement("figure")
    figureProducto.classList.add("producto__figura")
    section.append(articleProducto)
    articleProducto.prepend(figureProducto)
    return figureProducto
  }
  function mostrarCarrito() {
    const asideCarrito = document.querySelector(".carrito")
    crearProductoCarrito(asideCarrito)

  }
  function crearProductoCarrito(asideCarrito) {
      const EspacioProducto = document.createElement("li")
      EspacioProducto.innerText = `${it.id}: ${it.cantidad}` 
      asideCarrito.append(EspacioProducto)
  }
  function main() {
    crearCatalogo()
    activarBotones()
  }
  main()
  
