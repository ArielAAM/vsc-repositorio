window.onload = function() {
    // recogemos todos los elementos necesarios del html
    let checks = document.querySelectorAll("input");
    let botonCrear = document.querySelector("#crear");
    let botonInforme = document.querySelector("#informe");
    let objetos = document.querySelector("#objetos");
    botonCrear.addEventListener("click",crearObjetos);
    botonInforme.addEventListener("click",informe);

    //funcion que hace aparecer los elementos a introducir
    function crearObjetos() {
        for (let check of checks) { //iterador para recorrer todos los checkbox
            if (check.checked) {//se mira si el checkbox objetivo esta checkeado o no

                //estructura condicional para crear los elementos
                if (check.id === "NombreApellidos") {
                    objetos.innerHTML += `<p>Nombre y Apellidos: </p> <input type="text" name="nombre" class="objeto"><br>`;
                }

                else if (check.id === "FechaNac") {
                    objetos.innerHTML += `<p>Fecha de nacimiento: </p> <input type="date" name="fechaNacimiento" class="objeto"><br>`;
                }

                else if (check.id === "Direccion") {
                    objetos.innerHTML += `<p>Direccion: </p> <input type="text" name="direccion" class="objeto"><br>`;
                }
                else if (check.id === "CodigoPostal") {
                    objetos.innerHTML += `<p>Codigo Postal: </p> 
                                        <select class=objetos>
                                        <option value=""></option>
                                        <option value=15>15</option>
                                        <option value=27>27</option>
                                        <option value=32>32</option>
                                        <option value=33>33</option>
                                        <option value=39>39</option>
                                        </select>
                                        <input type="number name="codigo" class="objeto"><br>`
                }
            }
        }
    }
    
    let objects = document.querySelectorAll(".objeto");

    function informe() {
        let nombre;
        let fecha;
        let direccion;
        let codigo;
        for (let object of objects) {
            if (objeto.tagName === "NOMBRE") {
                let set = new Set();
                set.add(objeto);
                if (set.size > 45) {
                    window.alert("numero de caracteres ha superado el maximo");
                }
            }
        }
    }
}

                