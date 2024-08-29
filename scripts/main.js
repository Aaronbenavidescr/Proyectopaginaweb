//Configuracion al cargar la pagina
window.addEventListener("load", function() {
    var audio = document.getElementById("background-music");

    // Verifica si el elemento de audio existe
    if (audio) {
        // Agrega un evento de clic a todo el documento
        document.addEventListener("click", function() {
            // Reproduce el audio si no está ya en reproducción
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.error("No se pudo reproducir el audio:", error);
                });
            }
        });
    }
});

//configuracion de recargar pagina al tocar el logo
document.getElementById("miImagen").addEventListener("click", function() {
    location.reload();
});

//configuracion de desplazamiento de menú
document.getElementById("menuIcon").addEventListener("click", function() {
    var menu = document.getElementById("menuDesplegable");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px"; // Oculta el menú
    } else {
        menu.style.left = "0px"; // Despliega el menú
    }
});

//Configuracion de cerrar menú 
document.getElementById("closeMenu").addEventListener("click", function() {
    var menu = document.getElementById("menuDesplegable");
    menu.style.left = "-250px"; // Oculta el menú
});

//configuracion de botonones de menú
document.getElementById("inicio").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    closeMenu();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});


document.getElementById("saberMiCasa").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    closeMenu();
    document.getElementById("info3").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("requisitosMatricula").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    closeMenu();
    toggleAccordion('requisitos');
    document.querySelector(".accordion").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("acercade").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    closeMenu();
    toggleAccordion('acerca');
    document.querySelector(".accordion").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("toggleRequisitosFooter").addEventListener("click", function(event) {
    event.preventDefault();
    toggleAccordion('requisitos');
});

document.getElementById("toggleAcercaFooter").addEventListener("click", function(event) {
    event.preventDefault();
    toggleAccordion('acerca');
});

//boton de cards
document.querySelectorAll('.ver-mas').forEach(button => {
    button.addEventListener('click', function() {
        // Obtiene el nombre de la casa del atributo data-house
        const house = this.getAttribute('data-house');
        const info = document.getElementById(`info-${house}`);

        // Alterna la clase 'show' para mostrar/ocultar el contenido
        if (info.classList.contains('show')) {
            info.classList.remove('show');
        } else {
            // Oculta el contenido de otras tarjetas
            document.querySelectorAll('.card-info').forEach(info => info.classList.remove('show'));
            info.classList.add('show');
        }
    });
});


document.getElementById("contacto").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    closeMenu();
    document.getElementById("footerContacto").scrollIntoView({ behavior: 'smooth' });
});

// función acordion
function toggleAccordion(sectionId) {
    var contentRequisitos = document.getElementById('contentRequisitosFooter');
    var contentAcerca = document.getElementById('contentAcercaFooter');

    if (sectionId === 'requisitos') {
        if (contentRequisitos.classList.contains('show')) {
            contentRequisitos.classList.remove('show'); // Cierra si ya está abierto
        } else {
            contentRequisitos.classList.add('show');
            contentAcerca.classList.remove('show');
        }
    } else if (sectionId === 'acerca') {
        if (contentAcerca.classList.contains('show')) {
            contentAcerca.classList.remove('show'); // Cierra si ya está abierto
        } else {
            contentAcerca.classList.add('show');
            contentRequisitos.classList.remove('show');
        }
    }
}

function closeMenu() {
    var menu = document.getElementById("menuDesplegable");
    menu.style.left = "-250px"; // Oculta el menú
}

// funcion para que aparezca o desaparezca la cabecera

let lastScrollTop = 0; // Variable para rastrear la última posición del scroll

window.addEventListener("scroll", function() {
    const headerPanel = document.querySelector(".header-panel");

    // Obtiene la posición actual del scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Si se está haciendo scroll hacia abajo
        headerPanel.classList.add("hide");
    } else {
        // Si se está haciendo scroll hacia arriba
        headerPanel.classList.remove("hide");
    }

    // Actualiza la última posición del scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});