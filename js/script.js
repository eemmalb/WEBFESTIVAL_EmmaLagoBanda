
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





// COUNTDOWN FUNCIONAL
function initCountdown() {
    const targetDate = new Date("2026-02-20T00:00:00"); // ajusta a la fecha/hora del evento
    const els = {
        days: document.getElementById("countdown-days"),
        hours: document.getElementById("countdown-hours"),
        minutes: document.getElementById("countdown-minutes"),
        seconds: document.getElementById("countdown-seconds"),
    };

    if (!els.days || !els.hours || !els.minutes || !els.seconds) {
        return;
    }

    let timerId = null;

    function updateCountdown() {
        const now = new Date();
        let diff = targetDate - now;

        if (diff <= 0) {
            diff = 0;
            if (timerId !== null) {
                clearInterval(timerId);
            }
        }

        const totalSeconds = Math.floor(diff / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const days = Math.floor(totalHours / 24);

        els.days.textContent = String(days).padStart(2, "0");
        els.hours.textContent = String(hours).padStart(2, "0");
        els.minutes.textContent = String(minutes).padStart(2, "0");
        els.seconds.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    timerId = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", initCountdown);



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
