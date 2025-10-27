
// CUENTA REGRESIVA PÁGINA DE CARGA - TODO
// var contador = 0;

// function carga() {
//     if (contador <= 100) {
//         document.getElementById("porcentaje").innerHTML = contador + "%";
//         contador = contador + 1;
//         setTimeout(carga, 50);
//     } else {
//         document.getElementById("carga").style.top = "-100%";
//     }
// }

// window.onload = function () {
//     carga();
// }






// MENU DE HAMBURGUESA DESPLEGABLE
/**
 * Abre el menú
 */
 function openMenu() {
    console.log("Función openMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a 0 para que se despace hacia la derecha y sea visible
    document.getElementById("menu").style.left = "0";
}


/**
 * Cierra el menú
 */
function closeMenu() {
    console.log("Función closeMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a -100% para que se desplace hacia la izquierda y no sea visible
    document.getElementById("menu").style.left = "-100%";
}


/**
 * Busca el elemento con id "modal" y lo oculta estableciendo su estilo de display a "none"
 */
function cerrarModal() {
    document.getElementById("modal-imagen").style.display = "none";
}
