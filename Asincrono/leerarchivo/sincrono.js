// Importamos el módulo fs
const fs = require('fs');
const path = require('path');

// Creamos una función que simula una lectura síncrona lenta
function leerArchivoLento(nombre, codificacion) {
    // Declaramos una variable para almacenar los datos
    let data;
    // Usamos setTimeout para retrasar la lectura del archivo
    setTimeout(() => {
        // Leemos el archivo de forma síncrona, usando el método readFileSync
        data = fs.readFileSync(nombre, codificacion);
    }, 3000); // 3000 milisegundos = 3 segundos
    // Retornamos los datos
    return data;
}

// Usamos la función que simula una lectura síncrona lenta
const ruta = path.join(__dirname, 'archivo.txt');
const data = leerArchivoLento(ruta, 'utf8');

// Mostramos los datos del archivo
console.log(data.toString());

console.log("Fin del Script...");
