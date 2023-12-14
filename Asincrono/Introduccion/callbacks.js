function obtenMensaje(callback) {
    setTimeout(() => {
        let mensaje = "Mensaje de ejemplo";
        if (mensaje) callback(null, mensaje)
        else callback("Error en el mensaje...");
    }, 1000);
}
function imprimeMensaje(err, mensaje) {
    if (!err) console.log("Mensaje... ", mensaje)
    else console.log(err);
}

obtenMensaje(imprimeMensaje);
console.log("Fin del script");