window.onload=function() {

    const letras = ["a","b","c","d","e","f","g","h"];
    let i = 0;
    let tablero = document.createElement("section");
    tablero.classList.add("principal");
    tablero.style.display = 'flex';
    tablero.style.flexDirection = 'row';
    tablero.style.width = '800' + 'px';
    tablero.style.height = '800' + 'px';
    tablero.style.flexWrap = 'wrap';
    tablero.style.border = 'solid';
    document.body.append(tablero);
    function crearTablero() {

        for (var i = 0; i < 8;++i){
            var fila = document.createElement('div');
            fila.classList.add("fila");
            fila.classList.add(i+1);
            fila.style.display = 'flex';
            fila.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
            for (var j = 0 ; j < 8; ++j){
                var casilla = document.createElement('div');
                casilla.classList.add("casilla");
                casilla.classList.add(letras[j] + (i+1));
                casilla.style.width = '100' + 'px';
                casilla.style.flexGrow = '1';
                casilla.style.display = 'flex';
                casilla.style.backgroundColor = j % 2 ===0 ? 'white' : 'black'; 
                
                fila.appendChild(casilla);
            }
           
            fila.style.width = '800' + 'px';
            tablero.appendChild(fila);

        }
    }
    
    function leerJSON() {
        return fetch('../json/piezas.json')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data);
                return data;
            })
            .catch(function(err) {
                console.error("Error al cargar el archivo necesario: ", err);
                return Promise.reject(err)
            })
    }
    function colocarPiezas() {
        let piezas = leerJSON();
        var filas = document.querySelectorAll(".fila");
        for (var i=0;i<filas.length;++i){
            if(filas[i].className === "fila 7"){
                filas[i].children;
                for(let pieza of piezas){
                    if(pieza.id === "1"){
                        let imagen = document.createElement('img');
                        imagen.src = `../imagenes/${pieza.url}`;
                        imagen.alt = pieza.nombre;
                    }
                    
                }
                
            }
        }
    }
    // let colocarPiezas = async() => {
    //     let piezas = await leerJSON();
    //     var filas = document.querySelectorAll(".fila");
    //     for (var i=0;i<filas.length;++i){
    //         if(filas[i].className === "fila 7"){
    //             filas[i].children;
    //             for(let pieza of piezas){
    //                 if(pieza.id === "1"){
    //                     let imagen = document.createElement('img');
    //                     imagen.src = `../imagenes/${pieza.url}`;
    //                     imagen.alt = pieza.nombre;
    //                 }
    //                 for (var casilla of casillas ){
    //                     casilla.append(imagen);
    //                 }
    //             }
                
    //         }
    //     }

    // }

    
    crearTablero();
    colocarPiezas();


    

    
}





