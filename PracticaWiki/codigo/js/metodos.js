let fichas;
let intervalo;
let indexFicha=0;


function carruselInicio() {
    fichas = document.querySelectorAll(".ficha-carrusel");

    fichas[indexFicha].style.transform = "translateY(0%)";

    inicioIntervalo();
};

function inicioIntervalo() {
    intervalo = setInterval(cambiarFicha,3500);
};

function cambiarFicha() {
    fichas[indexFicha].style.zIndex = "0";
    fichas[indexFicha].style.transform = "translateY(-150%)";

    indexFicha = (indexFicha + 1) % fichas.length;

    fichas[indexFicha].style.zIndex = "1";
    fichas[indexFicha].style.transform = "translateY(0%)";
};

function carruselParar() {
    clearInterval(intervalo);

    for (const ficha of fichas) {
        ficha.removeAttribute("style");
    }

    indexFicha = fichas.length-1;
};