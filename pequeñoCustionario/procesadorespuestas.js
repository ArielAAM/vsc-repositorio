window.onload = function() {
    let boton = document.querySelector("button");
    let respuestas = document.querySelectorAll(".respuesta input[type=radio]");
    boton.addEventListener("click",procesaRespuesta);
            /*for (let respuesta of respuestas) {
                respuesta.addEventListener("change", procesaRespuesta);
            }*/
            function procesaRespuesta1() {
                console.log(document.querySelector(".respuesta input[type=radio]:checked").value) 
            }
            function procesaRespuesta() {
                let respuesta = document.querySelector(".respuesta input[type=radio]:checked").value === "true";
                let color = (respuesta) ? "green" : "red";
                console.log(document.querySelector(".respuesta input[type=radio]:checked+label")) 
                document.querySelector(".respuesta input[type=radio]:checked+label").style.backgroundColor=color
            }
}