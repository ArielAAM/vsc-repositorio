// Importamos el módulo fs
const fs = require('fs');
const path = require('path');

// Definimos una función callback
const callback = (error, data) => {
    // Si hay un error, lo mostramos
    if (error) {
        console.error(error);
    } else {
        // Si no hay error, mostramos los datos del archivo
        console.log(data.toString());
    }
};

// Leemos el archivo de forma asíncrona, pasando la función callback
const ruta = path.join(__dirname, 'archivo.txt');
fs.readFile(ruta, 'utf8', callback);

console.log("Fin del Script...");