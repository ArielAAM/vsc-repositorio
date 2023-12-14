
window.onload = function () {
    // Selecciona los elementos del menú y el marcador
    let opcionesMenu = document.querySelectorAll(".logo-menu .menu ul li");
    let marcador = document.querySelector(".marcador");

    // Posición primer elemento del menú
    let posicionItemMenuLeft = opcionesMenu[0].getBoundingClientRect().left;
    let posicionItemMenuTop = opcionesMenu[0].getBoundingClientRect().top;

    // Colocamos marcador que está en left=0 (por su posición aboluta). Lo colocamos encima del primer elemento de menú
    marcador.style.left = `${posicionItemMenuLeft}px`;
    marcador.style.top = `${posicionItemMenuTop - 80}px`;
    marcador.style.height = "90px";

    // Asigna eventos
    for (const opcion of opcionesMenu) {
        opcion.addEventListener("mouseover", mouseOver);
        opcion.addEventListener("mouseout", mouseOut);
    }

    function mouseOver(event) {
        // Obtiene el elemento que disparó el evento
        let target = event.target;

        // Obtiene el rectángulo que rodea al elemento
        let rect = target.getBoundingClientRect();

        // Obtiene las propiedades del rectángulo del <li> que nos interesan
        let left = rect.left;
        let width = rect.width;

        // Modifica las propiedades del marcador para que coincidan con las del rectángulo
        marcador.style.left = left + "px";
        marcador.style.width = width + "px";

    }
    function mouseOut() {
        marcador.style.width = "0";
        marcador.style.left = `${posicionItemMenuLeft}px`;
    }
}

