window.onload = function() {

    let boton = document.querySelector(".titulo-botones .wik-celda");
    let logo = document.querySelector(".logo-secundario > span");
    
    logo.addEventListener("click", function() {
        window.location.pathname = "/PracticaWiki/codigo/index.html";
    })

    boton.addEventListener("click",function() {
   
        let hrefEstilos = document.querySelector("#estilosGale");
        let hojaCss = hrefEstilos.href.split("/");
        

        switch (hojaCss[hojaCss.length - 1]){
            case "estilosGaleria.css":
                carruselInicio();
                hrefEstilos.href = "../estilos/estilosCarrusel.css";
                boton.lastElementChild.textContent = "vista galeria";
                break;
            case "estilosCarrusel.css":
                carruselParar();
                hrefEstilos.href = "../estilos/estilosGaleria.css";
                boton.lastElementChild.textContent = "vista carrusel";
        }
    })

    
}