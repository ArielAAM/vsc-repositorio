window.onload=function() {

    
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
            fila.style.display = 'flex';
            fila.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
            for (var j = 0 ; j < 8; ++j){
                var casilla = document.createElement('div');
                casilla.classList.add("casilla");
                casilla.style.width = '100' + 'px';
                casilla.style.flexGrow = '1';
                casilla.style.display = 'flex';
                casilla.style.backgroundColor = j % 2 ===0 ? 'white' : 'black'; 
                casilla.append("hola");
                fila.appendChild(casilla);
            }
           
            fila.style.width = '800' + 'px';
            tablero.appendChild(fila);

        }
    }

    async function leerJSON() {
        const respuesta = await fetch("../json/piezas.json");
        return (await respuesta.json());
    }

    let colocarPiezas = async() => {
        piezas = await leerJSON();
        var filas = document.querySelectorAll(".fila");
        for (var i=0;i<filas.length;++i){
            if(filas.length-i===6){
                
                let imagen = document.createElement('img');
                imagen.src=`../imagenes/${piezas[0].url}`;

                var casillas = document.querySelectorAll(".fila .casilla");
                for (var casilla of casillas ){
                    casilla.append(imagen);
                }
            }
        }

    }

    // function colocarPiezas() {
    //     // const fs = require('fs');
    //     // const piezas = fs.readFileSync('../../json/piezas.json');
    //     // const piezasLeidas = JSON.parse(piezas);
    //     var filas = document.querySelectorAll(".fila");
    //     for (var i=0;i<filas.length;++i){
    //         if(filas.length-i===6){
                
    //             let imagen = document.createElement('img');
    //             imagen.src=piezasLeidas[0].url;

    //             var casillas = document.querySelectorAll(".fila .casilla");
    //             for (var casilla of casillas ){
    //                 casilla.append(imagen);
    //             }
    //         }
    //     }
    // }
    crearTablero();
    colocarPiezas();


    

    
}





