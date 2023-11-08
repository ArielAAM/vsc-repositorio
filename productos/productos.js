window.onload = function() {
    const prods = [
        {
            imagen: "raton.jpg",
            imgalt: "raton gamer",
            precio: "100.45$",
            desc: "raton hecho por gamer para gamers"
        },
        {
            imagen: "teclado.jpg",
            imgalt: "teclado ergonomico",
            precio: "20$",
            desc: "teclado ergonomico para los mas mayores"
        },
        {
            imagen: "micro.jpg",
            imgalt: "microfono gamer",
            precio: "75.75$",
            desc: "microfono profesional que graba increible"
        }
    ]
    



    function consulta() {
        let section = document.querySelector("section");

        let sec = document.createElement('article');
        sec.classList.add("productos");

        let sec2 = document.createElement('article');
        sec2.classList.add("carrito");

        

        let titulocarrito = document.createElement('h1');
        titulocarrito.textContent="carrito";
        sec2.append(titulocarrito);

        let tituloproducto = document.createElement('h1');
        tituloproducto.textContent="La cesta de la compra";
        sec.append(tituloproducto);

        for (const prod of prods){
            let titulo = document.createElement('h2');
            titulo.textContent = `${prod.imgalt}`;
            let division = document.createElement('div');
            division.classList.add("producto");
            
            let imagen = document.createElement('img');
            let descripcion = document.createElement('p');

            let boton = document.createElement('button');
            boton.textContent = "Añadir al carrito";
            boton.classList.add("botonAñadir");
            imagen.src = `./imgs/${prod.imagen}`;
            imagen.width = '250';
            
            imagen.alt = prod.imgalt;
            descripcion.textContent = prod.desc;

            let precio = document.createElement('p');
            precio.textContent = `Precio: ${prod.precio}`;
            division.append(titulo);
            division.append(imagen);
            division.append(descripcion);
            division.append(precio);
            division.append(boton);
            sec.append(division);

            section.append(sec);
            section.append(sec2);
        }

        document.body.append(section);
        
        let botonAgregar = document.querySelectorAll(".botonAñadir");

        for (boton of botonAgregar) {
            boton.addEventListener("click", añadirCarrito);
        }

        function añadirCarrito(even) {
            let producto = even.target;

            let productocarrito = document.createElement('div');
            productocarrito.classList.add("productoCarrito")
            let imagenCarrito = document.createElement('img');
            let title = document.createElement('h3');
            title.textContent = `${producto.parentElement.firstElementChild.textContent}`;
            productocarrito.append(title);

            imagenCarrito.src = producto.parentElement.firstElementChild.nextElementSibling.src;
            imagenCarrito.alt = producto.parentElement.firstElementChild.nextElementSibling.alt;
            imagenCarrito.height = '100';

            let detalles = document.createElement('div');
            detalles.append(imagenCarrito);
            detalles.classList.add("detallesCarrito");
            detalles.append(document.createElement('p'));
            detalles.firstElementChild.nextElementSibling.textContent = producto.parentElement.lastElementChild.previousElementSibling.textContent;
            detalles.append(document.createElement('button'));
            detalles.lastElementChild.textContent = "Borrar producto";
            detalles.lastElementChild.classList.add("borrarProducto");
            detalles.lastElementChild.addEventListener("click",borrar);
            productocarrito.append(detalles);
            sec2.append(productocarrito);
        }

        

        function borrar(even) {
            let elemento = even.target.parentNode.parentNode;
            elemento.remove();
        }
    }


    consulta();

    
}