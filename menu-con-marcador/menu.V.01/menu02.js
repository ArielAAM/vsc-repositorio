
window.onload = function () {
    // Selecciona los elementos del menú y el marcador
    let opcionesMenu = document.querySelectorAll("li");
    let marcador = document.querySelector(".marcador");

    // Posición primer elemento del menú
    let posicionItemMenu1 = opcionesMenu[0].getBoundingClientRect().left;

    // Colocamos marcador que está en left=0 por su posición aboluta. Lo colocamos antes del primer elemento
    let posicionInicialMarcador = `${posicionItemMenu1}px`;
    marcador.style.left = posicionInicialMarcador;

    // Obtenemos características del marcador
    let posicionMarcador = marcador.getBoundingClientRect();
    console.log("Marcador inicio... ", posicionMarcador)

    // Asigna eventos
    for (const opcion of opcionesMenu) {
        opcion.addEventListener("mouseover", mouseOver);
        opcion.addEventListener("mouseout", mouseOut);
    }

    function mouseOver(event) {
        // Obtiene el elemento que disparó el evento
        let target = event.target;

        // Comprueba que sea un elemento li del menú
        // if (target.tagName === "LI") {
        // Obtiene el rectángulo que rodea al elemento
        let rect = target.getBoundingClientRect();
        console.log(rect)

        // Obtiene las propiedades del rectángulo
        let left = rect.left;
        let top = rect.top;
        let width = rect.width;
        let height = rect.height;
        // Modifica las propiedades del marcador para que coincidan con las del rectángulo

        // let pos = left - posicionMarcador.left;
        // marcador.style.left = pos + "px"

        marcador.style.left = left + "px";

        marcador.style.top = top + "px";
        marcador.style.width = width + "px";
        marcador.style.height = height + "px";
        // }
    }
    function mouseOut() {
        // marcador.style.width = "0";
        // marcador.style.height = posicionMarcador.height;
        // setTimeout(() => {
        marcador.style.width = "0";
        marcador.style.left = posicionInicialMarcador;
        // }, 300);
        // marcador.style.top = posicionMarcador.x;
    }
}

