//variable de tipo 'let' solo tiene visibilidad dentro de la funcion. La variable de tipo 'var' tiene visibilidad global.
//se recomienda que las variables se declaren al principio del codigo.
let nombre = "tumadre";
let cp = "33202";
let ciudad = "Gijon";
function saluda() {
    console.log("saludos de " + nombre + " que vive en " + '"' + ciudad + '"' + " y su codigo postal es " + cp);
    let template =`saludos de ${nombre} que vive en ${ciudad}`;
    console.log(template);
}
saluda();
function cual(valor){
    return(valor*valor);
}

const cuadrado = valor => valor*valor; //se declaran las funciones en las variables como constantes

console.log(cual(2));
console.log(cuadrado(3));