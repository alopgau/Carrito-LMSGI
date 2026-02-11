"use strict";

// ============================================
// DATOS (catálogo, carrito, configuración)
// ============================================

const catalogo = [
     { id: 1, nombre: "Camiseta básica", precio: 15.99, categoria: "ropa" },
    { id: 2, nombre: "Pantalón vaquero", precio: 39.99, categoria: "ropa" },
    { id: 3, nombre: "Zapatillas running", precio: 89.99, categoria: "calzado" },
    { id: 4, nombre: "Sudadera con capucha", precio: 45.00, categoria: "ropa" },
    { id: 5, nombre: "Gorra deportiva", precio: 12.50, categoria: "accesorios" },
    { id: 6, nombre: "Mochila urbana", precio: 35.00, categoria: "accesorios" },
    { id: 7, nombre: "Calcetines pack 3", precio: 9.99, categoria: "ropa" },
    { id: 8, nombre: "Chanclas playa", precio: 14.99, categoria: "calzado" }  
];

const carrito = [
  { productoId: 1, cantidad: 3 },   // 3 camisetas
    { productoId: 3, cantidad: 1 },   // 1 zapatillas
    { productoId: 5, cantidad: 2 },   // 2 gorras
    { productoId: 7, cantidad: 4 }    // 4 packs calcetines  
];

const codigoPromocional = "DESCUENTO20";
const esClientePremium = true;

// ============================================
// CONSTANTES DE CONFIGURACIÓN
// ============================================

const IVA = 0.21;
const UMBRAL_DESCUENTO_10 = 100;
const UMBRAL_DESCUENTO_15 = 200;
const UMBRAL_ENVIO_GRATIS = 100;
const UMBRAL_ENVIO_REDUCIDO = 50;
// ... añade más constantes según necesites

// ============================================
// PASO 1: Construir el carrito detallado
// ============================================

// TODO: Recorre el carrito y para cada item:
// - Busca el producto en el catálogo por su ID
// - Crea un objeto con: id, nombre, precioUnitario, cantidad, subtotal

// Pista: Puedes usar un bucle for...of o el método find()

let carritoFinal = [

]

for (const itemCarrito of carrito) {
    for (const itemCatalogo of catalogo) {
    if (itemCarrito["productoId"] == itemCatalogo["id"] ) {
        const nombre = itemCatalogo["nombre"] 
        const id = itemCatalogo["id"]
        const precio = itemCatalogo["precio"]
        const cantidad = itemCarrito["cantidad"]
        const subtotal = precio * cantidad
        const infoItem = {
        "id": id,
        "nombre": nombre,
        "precio": precio,
        "cantidad": cantidad,
        "subtotal": subtotal
    }
    carritoFinal.push(infoItem)
    console.log(carritoFinal)
        
        
    }
    }   
    }


// ============================================
// PASO 2: Calcular el subtotal del carrito
// ============================================
    let subtotalCarrito = 0
    for (const item of carritoFinal) {
    subtotalCarrito += item.subtotal
    }
    console.log(subtotalCarrito)


// ============================================
// PASO 3: Calcular descuentos
// ============================================

// TODO: Determina qué descuento por volumen aplica (10% o 15%)
let subtotalCarritoDescuento = 0
if (subtotalCarrito > 100) {
    subtotalCarritoDescuento += subtotalCarrito*0.1
} else if (subtotalCarrito > 200) {
    subtotalCarritoDescuento = subtotalCarrito*0.15
}

// TODO: Comprueba si el código promocional es válido

if (codigoPromocional == "DESCUENTO20") {
    subtotalCarritoDescuento += subtotalCarrito*0.2
}

// TODO: Calcula el total después de descuentos


// ============================================
// PASO 4: Calcular IVA
// ============================================

// TODO: Calcula el IVA sobre el precio con descuentos
const precioIVA = subtotalCarrito * 0.21

// ============================================
// PASO 5: Calcular gastos de envío
// ============================================
let subtotalCarritoEnvio = 0
if (!esClientePremium) {
    if (subtotalCarrito > 50) {
        subtotalCarritoEnvio = 4.99
    }
    else if (subtotalCarrito > 50 && subtotalCarrito < 100) {
        subtotalCarritoEnvio = 2.99
    }
    
}
// TODO: Determina los gastos de envío según el total y si es premium


// ============================================
// PASO 6: Calcular total final
// ============================================

// TODO: Suma todo: precio con descuentos + IVA + envío


// ============================================
// PASO 7: Calcular ahorro total
// ============================================
const ahorro = (subtotalCarrito + subtotalCarritoEnvio) - (subtotalCarritoDescuento + precioIVA + subtotalCarritoEnvio)
// TODO: Calcula cuánto se ha ahorrado el cliente
// (subtotal original + envío normal) - total final


// ============================================
// PASO 8: Mostrar el ticket
// ============================================
console.log("Cliente:" `${esClientePremium ? (true:false)}`)
// TODO: Usa console.log() con template literals para mostrar
// el ticket formateado como en el ejemplo

// Pista para formatear precios: numero.toFixed(2)
// Pista para alinear texto: string.padStart(10) o string.padEnd(3