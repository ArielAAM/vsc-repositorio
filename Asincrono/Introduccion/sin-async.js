const obtenMensaje = () => {
    setTimeout(() => {
        let mensaje = "Este es el mensaje";
        return mensaje;
    }, 1000);
}
console.log("Mensaje... ", obtenMensaje());

console.log("Fin del script");