// Importamos el módulo fs
const fs = require('fs');
const path = require('path');

// Creamos una función que devuelve una promesa
function leerArchivoPromesa(nombre, codificacion) {
    // Retornamos una nueva promesa
    return new Promise((resolve, reject) => {
        // Llamamos a la función fs.readFile con el nombre y la codificación del archivo
        fs.readFile(nombre, codificacion, (error, data) => {
            // Si hay un error, rechazamos la promesa con el error
            if (error) {
                reject(error);
            } else {
                // Si no hay error, resolvemos la promesa con los datos
                resolve(data);
            }
        });
    });
}

// Usamos la función que devuelve una promesa
const ruta = path.join(__dirname, 'archivo.txt');

leerArchivoPromesa(ruta, 'utf8')
    // Accedemos al valor de los datos, usando el método then
    .then((data) => {
        // Mostramos los datos del archivo
        console.log(data.toString());
    })
    // Capturamos los posibles errores, usando el método catch
    .catch((error) => {
        // Mostramos el error
        console.error(error);
    });
