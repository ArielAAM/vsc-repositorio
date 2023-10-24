window.onload = function() {
    // recogemos todos los elementos necesarios del html
    let checks = document.querySelectorAll("input");
    let botonCrear = document.querySelector("#crear");
    let botonInforme = document.querySelector("#informe");
    let objetos = document.querySelector("#objetos");
    let informar = document.querySelector("#informar");
    botonCrear.addEventListener("click",crearObjetos);
    botonInforme.addEventListener("click",informe);

    //funcion que hace aparecer los elementos a introducir
    function crearObjetos() {
        for (let check of checks) { //iterador para recorrer todos los checkbox
            if (check.checked) {//se mira si el checkbox objetivo esta checkeado o no

                //estructura condicional para crear los elementos
                if (check.id === "NombreApellidos") {
                    objetos.innerHTML += `<p>Nombre y Apellidos: </p> <input type="text" name="nombre" id="nombredato" class="dato"><br>`;
                }

                else if (check.id === "FechaNac") {
                    objetos.innerHTML += `<p>Fecha de nacimiento: </p> <input type="date" id="fechadato" name="fechaNacimiento" class="dato"><br>`;
                }

                else if (check.id === "Direccion") {
                    objetos.innerHTML += `<p>Direccion: </p> <input type="text" id="direcciondato" name="direccion" class="dato"><br>`;
                }
                else if (check.id === "CodigoPostal") {
                    objetos.innerHTML += `<p>Codigo Postal: </p><input type="number" id="codigodato" name="codigo" class="dato"><br>`;
                }
            }
        }
    }
    

    function informe() {
        
        let objects = document.querySelectorAll(".dato");
        let nombre;
        let fecha;
        let direccion;
        let codigo;
        for (let object of objects) {
            if (object.id == "nombredato") {
                
                if (object.length > 45) {
                    informar.innerHTML += `<p>El numero de  caracteres ha alcanzado el maximo</p><br>`;
                }
                else{
                    let nombre = object.value;
                }
                
            }
        }
    }
}

                