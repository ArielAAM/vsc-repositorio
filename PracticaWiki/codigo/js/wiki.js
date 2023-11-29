window.onload = function() {
    const imagen = document.querySelector(".imagen-fondo");
    const opciones = document.querySelector(".opciones");
    const boton = document.querySelector(".menu-velo");
    const velo = document.querySelector(".velo-principal");

    boton.addEventListener("click", () => {
        opciones.classList.toggle("mostrar-menu");
        imagen.classList.toggle("desplazar-abajo");
        boton.lastElementChild.classList.toggle("girar-boton");
        velo.classList.toggle("pon-velo");
    })
}