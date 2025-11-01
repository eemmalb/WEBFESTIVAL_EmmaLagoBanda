
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

document.addEventListener("DOMContentLoaded", function () {
    initCountdown();
    initMenuScrollBehavior();
    initLineupSlider();
});



// MENU DE HAMBURGUESA DESPLEGABLE
/**
 * Abre el menú
 */
function openMenu() {
    console.log("Función openMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a 0 para que se despace hacia la derecha y sea visible
    document.getElementById("menu").style.right = "0";
    document.body.classList.add("menu-open");
    var menuBar = document.querySelector(".menu");
    if (menuBar) {
        menuBar.classList.add("is-visible");
    }
}


/**
 * Cierra el menú
 */
function closeMenu() {
    console.log("Función closeMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a -100% para que se desplace hacia la izquierda y no sea visible
    document.getElementById("menu").style.right = "-100%";
    document.body.classList.remove("menu-open");
}




// Para que el menu se muestre o no según el scroll
function initMenuScrollBehavior() {
    var menuBar = document.querySelector(".menu");
    if (!menuBar) {
        return;
    }
    
    var lastScrollY = window.scrollY;
    var menuVisible = false;

    function showMenuBar() {
        if (!menuVisible) {
            menuBar.classList.add("is-visible");
            menuVisible = true;
        }
    }

    function hideMenuBar() {
        if (menuVisible) {
            menuBar.classList.remove("is-visible");
            menuVisible = false;
        }
    }

    function handleScroll() {
        var currentY = window.scrollY;

        if (document.body.classList.contains("menu-open")) {
            showMenuBar();
            lastScrollY = currentY;
            return;
        }

        if (currentY <= 10) {
            hideMenuBar();
            lastScrollY = currentY;
            return;
        }

        if (currentY > lastScrollY + 2) {
            showMenuBar();
        } else if (currentY < lastScrollY - 10) {
            hideMenuBar();
        }

        lastScrollY = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // do not call handleScroll immediately to keep it hidden until first movement
}



// abre la ventana modal
// pongo un parametro (figura) que sera el figure sobre el que yo le he hecho clic, y más tarde trabajare con ese parametro figura
function openModal(figura) {
    console.log("Funcion openModal");
    // buscamos la ventana modal y la guardamos en una variable, ya que trabajaremos con ella
    var modal = document.getElementById("modal");
    // tiene el display none asi que lo cambiamos a display flex, para que al darle a ese figure se abra esa ventana modal
    modal.style.display = "flex";
    
    // con esto encuentra el valor del atributo src dentro del primer figure
    var imagenGaleria = figura.firstElementChild;
    var rutaImagen =
    figura.getAttribute("data-modal-image") ||
    imagenGaleria.getAttribute("data-modal-image") ||
    imagenGaleria.getAttribute("src");
    console.log("Valor de la ruta de la imagen: " + rutaImagen);
    
    // innerHTML pone todo el html que esté dentro de los elementos que has seleccionado previamente  
    var pieImagen = figura.lastElementChild.innerHTML;
    console.log("Pie de imagen: " + pieImagen);
    
    
    // OPCIÓN 1 PARA CALCULAR EL ATRIBUTO SRC DE LA IMAGEN DE LA VENTANA MODAL 
    // esto busca el primer img que encuentre dentro de cualquier hijo dentro de esa ventana modal
    var modalImg = modal.querySelector(".modal-media img");
    modalImg.src = rutaImagen;
    modalImg.alt = imagenGaleria.getAttribute("alt") || "";
    
    
    // OPCIÓN 2 PARA CAMBIAR EL ATRIBUTO: MOVERNOS POR LOS HIJOS
    // modal.firstElementChild.firstElementChild.setAttribute("src", rutaImagen)
    
    // cambiamos el valor del figcaption con la primera opción
    modal.querySelector("figcaption").innerHTML = pieImagen;
}

// cerramos la ventana modal al darle clic a la x
function closeModal() {
    console.log("Funcion closeModal");
    modal.style.display = "none";
}

/**
 * Busca el elemento con id "modal" y lo oculta estableciendo su estilo de display a "none"
 */
function cerrarModal() {
    document.getElementById("modal-imagen").style.display = "none";
}



// Galeria line-up
function initLineupSlider() {
    var slider = document.querySelector(".lineup-slider");
    if (!slider) {
        return;
    }

    var track = slider.querySelector(".lineup-track");
    if (!track) {
        return;
    }

    var buttons = slider.querySelectorAll("[data-lineup-dir]");

    function scrollAmount() {
        return track.clientWidth * 0.8;
    }

    function scrollByDirection(dir) {
        track.scrollBy({ left: dir * scrollAmount(), behavior: "smooth" });
    }

    buttons.forEach(function (button) {
        var dir = Number(button.dataset.lineupDir || 0);
        if (!dir) {
            return;
        }

        button.addEventListener("click", function () {
            scrollByDirection(dir);
        });
    });

    function updateButtons() {
        var maxScroll = track.scrollWidth - track.clientWidth;
        var atStart = track.scrollLeft <= 8;
        var atEnd = track.scrollLeft >= maxScroll - 8;

        buttons.forEach(function (button) {
            var dir = Number(button.dataset.lineupDir || 0);
            if (!dir) {
                return;
            }

            var disable = dir < 0 ? atStart : atEnd;
            button.disabled = disable;
            button.setAttribute("aria-disabled", disable);
        });
    }

    track.addEventListener("scroll", function () {
        window.requestAnimationFrame(updateButtons);
    });

    updateButtons();
}