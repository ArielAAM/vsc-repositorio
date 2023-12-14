// Importamos el módulo fs
const fs = require('fs');
const path = require('path');

// Declaramos una función asíncrona, usando la palabra clave async
const leerArchivo = async () => {
    // Esperamos a que la promesa se resuelva, usando la palabra clave await
    const ruta = path.join(__dirname, 'archivo.txt');
    const data = await fs.promises.readFile(ruta, 'utf8');
    // Mostramos los datos del archivo
    console.log(data.toString());
};

// Llamamos a la función asíncrona
leerArchivo();