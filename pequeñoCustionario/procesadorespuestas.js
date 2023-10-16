window.onload = function() {
    let boton = document.querySelector("button");
    

    boton.addEventListener("click",procesadoRespuesta);

    function procesadoRespuesta() {
        let respuesta = document.querySelectorAll(".respuesta input[type=radio]").value==='true';
        let color = (respuesta) ? "green" : "red";
        document.querySelectorAll(".respuesta input[type=radio]:checkd+label").value.backgroundcolor=color;
    }
}