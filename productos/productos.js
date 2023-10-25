window.onload = function() {
    const prods = [
        {
            imagen: "raton.jpg",
            imgalt: "raton gamer",
            desc: "raton hecho por gamer para gamers"
        },
        {
            imagen: "teclado.jpg",
            imgalt: "teclado ergonomico",
            desc: "teclado ergonomico para los mas mayores"
        }
    ]

    document.querySelector("button").addEventListener("click",consulta);

    function consulta() {
        let sec = document.createElement('section');

        for (const prod of prods){
            
            let imagen = document.createElement('img');
            let descripcion = document.createElement('p');
            imagen.src = `./imgs/${prod.imagen}`;
            imagen.width = '250';
            
            imagen.alt = prod.imgalt;
            descripcion.textContent = prod.desc;

            sec.append(imagen);
            sec.append(descripcion);
        }

        document.body.append(sec);
    }

}