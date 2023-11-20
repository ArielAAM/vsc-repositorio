window.onload = function() {
    //creamos un array con todos los atributos de las imagenes
    const productos = [{
            id: 1,
            denominacion: "carnes frías",
            comentario: "Auténtico, gourmet carnes cocinadas y vajilla fina de comedor con botella de vino, vasos y tablas de cortar en un banco de madera rústica",
            foto: "carnes.jpg"
        },
        {
            id: 2,
            denominacion: "desayunos",
            comentario: "Auténtico, gourmet carnes cocinadas y vajilla fina de comedor con botella de vino, vasos y tablas de cortar en un banco de madera rústica",
            foto: "desayuno.jpg"
        },
        {
            id: 3,
            denominacion: "tomates",
            comentario: "Vista de primer plano de verduras orgánicas maduras frescas en el mercado de agricultores ",
            foto: "tomates.jpg"
        },
        {
            id: 4,
            denominacion: "huevos",
            comentario: "Composición con variedad de productos comestibles como carne y productos lácteos",
            foto: "huevos.jpg"
        },
        {
            id: 5,
            denominacion: "embutidos",
            comentario: "Surtido de deliciosas carnes delicatessen en tabla de madera",
            foto: "embutidos.jpg"
        },
        {
            id: 6,
            denominacion: "lacteos",
            comentario: "La leche en mesa de madera con las vacas en el fondo ",
            foto: "lacteos.jpg"
        },
        {
            id: 7,
            denominacion: "quesos",
            comentario: "Estilo tradicional de las tazas de queso artesanales",
            foto: "quesos.jpg"
        }
    ];

    //creamos una funcion donde estara todo el codigo
    function crear() {

        //Creacion del elemento titulo de de las distintas secciones que va a estar compuesta la pagina
        let titPrincipal = document.createElement('h1');
        titPrincipal.classList.add("tituloPrincipal");
        titPrincipal.textContent = "Productos clasificados";
        document.body.append(titPrincipal)

        //creacion de la seccion principal ,de los productos y de los grupos
        let seccionPrincipal = document.createElement('section');
        seccionPrincipal.classList.add("principal")
        let seccionProds = document.createElement('section');
        seccionProds.classList.add("productos")
        let seccionGrupos = document.createElement('section');
        seccionGrupos.classList.add("grupos");

        //creacion de las distintas secciones que va a estar compuesta la seccion de los grupos
        seccionGrupos.append(document.createElement('article'));
        seccionGrupos.firstElementChild.classList.add("GrupoA");
        seccionGrupos.firstElementChild.append(document.createElement('h3'));

        seccionGrupos.firstElementChild.firstElementChild.textContent = "Grupo A";

        seccionGrupos.append(document.createElement('article'));
        seccionGrupos.lastElementChild.classList.add("GrupoB");
        seccionGrupos.lastElementChild.append(document.createElement('h3'));

        seccionGrupos.lastElementChild.firstElementChild.textContent = "Grupo B";


        //iteracion para poder introducir los productos en su correspondiente seccion
        for (const prod of productos) {
            //creamos el articulo donde van a ir todos los elementos del producto
            let producto = document.createElement('article');
            producto.classList.add("producto");

            //creacion de los elementos en cuestion
            let imagen = document.createElement('img');
            let descripcion = document.createElement('div');
            descripcion.classList.add("detalles");

            //establecemos los atributos de la imagen que vamos a insertar
            imagen.src = `imagenes/${prod.foto}`;
            imagen.alt = prod.denominacion;
            imagen.width = '300';

            //establecemos los demas atributos del producto
            descripcion.append(document.createElement('h3'));
            descripcion.firstElementChild.textContent = prod.denominacion;

            descripcion.append(document.createElement('p'));
            descripcion.firstElementChild.nextElementSibling.textContent = prod.comentario;
            descripcion.append(document.createElement('div'));
            descripcion.lastElementChild.classList.add("botones");
            descripcion.lastElementChild.append(document.createElement('button'));
            descripcion.lastElementChild.firstElementChild.classList.add("boton");
            descripcion.lastElementChild.firstElementChild.textContent = "Grupo A";

            descripcion.lastElementChild.append(document.createElement('button'));
            descripcion.lastElementChild.lastElementChild.classList.add("boton");

            descripcion.lastElementChild.lastElementChild.textContent = "Grupo B";

            //insertamos los elementos creados en la seccion de los productos
            producto.append(imagen);
            producto.append(descripcion);
            
            seccionProds.append(producto);

        }
        
        var botones = document.querySelectorAll("button");
        
        for (let boton of botones) {
            boton.addEventListener("click",añadirgrupo);
        }
        
        function añadirgrupo(even) {

            let seleccionado = even.target;
            let productoGrupo = document.createElement('div');

            if (seleccionado.textContent === "Grupo A") {
                productoGrupo.append(document.createElement('h3'));
                productoGrupo.textContent = seleccionado.parentElement.parentElement.firstElementChild.cloneNode(true);
                let imagenGrupo = document.createElement('img');
                imagenGrupo = producto.firstElementChild.cloneNode(true);
                productoGrupo.append(imagenGrupo);
                seccionGrupos.firstElementChild.append(productoGrupo);
              
            }
            else {
                productoGrupo.append(document.createElement('h3'));
                productoGrupo.textContent = seleccionado.parentElement.parentElement.firstElementChild.cloneNode(true);
                let imagenGrupo = document.createElement('img');
                imagenGrupo = producto.firstElementChild.cloneNode(true);
                productoGrupo.append(imagenGrupo);
                seccionGrupos.lastElementChild.append(productoGrupo);
            }
        }
        
        //insertamos tanto la seccion de productos como la seccion de grupos en la seccion principal para posteriormente insertar esta en el body
        seccionPrincipal.append(seccionProds);
        seccionPrincipal.append(seccionGrupos);
        document.body.append(seccionPrincipal);
    }

    //para poder crear todos los elementos en tiempo de ejecucion, llamamos a la funcion en cuestion
    crear();
}