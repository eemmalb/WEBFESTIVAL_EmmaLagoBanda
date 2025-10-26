var contador = 0;

function carga() {
    if (contador <= 100) {
        document.getElementById("porcentaje").innerHTML = contador + "%";
        contador = contador + 1;
        setTimeout(carga, 50);
    } else {
        document.getElementById("carga").style.top = "-100%";
    }
}

window.onload = function () {
    carga();
}
