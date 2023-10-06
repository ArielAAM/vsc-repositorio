//evento 
window.onload = function(){

    //variables globales necesarias para guardar el resultado ambos operandos y el operador, y una variable auxliar
    var resultado = "";
    var op1 = 0;
    var op2 = 0;
    var operando = "";
    var sustituto = "";

    //variables para guardar los datos de los distintos botones de la calculadora
    let input = document.querySelector("input"); //variable que guarda los datos que se van a imprimir por pantalla
    let digito = document.querySelectorAll(".digito");//variable que guarda los  numeros usados para calcular
    let aritmetica = document.querySelectorAll(".aritmetica");//variable que guarda los operadores para operaciones binarias
    let igual = document.querySelector(".igual");
    let borrar = document.querySelector("#borrar");
    let deci = document.querySelector("#decimal");//variable que guarda la coma
    let unitario = document.querySelectorAll(".unitario");//variable que guarda los distintos operadores unitarios
    let pi = document.querySelector("#pi");

    //bucle for-of para añadir un evento a cada boton con numero
    for (let iterator of digito) {
        iterator.addEventListener("click",numero);//se usa la funcion "numero" para el evento "click"
        
    }

    //bucle for-of para añadir un evento a cada boton con los operadores binarios
    for (let iterator of aritmetica){
        iterator.addEventListener("click",operacion);//se usa la funcion "operacion" para el evento "click"
    
    }

    //bucle for-of para añadir un evento a cada boton con los operadores unitarios
    for (let iterator of unitario){
        iterator.addEventListener("click",resolverUnitario);//se usa la funcion "resolverUnitario" para el evento "click"
    }

    //se añaden eventos para los botones igual, decimal y borrar, usando las funciones "decimal", "resolver" y "borrado" para el evento "click"
    deci.addEventListener("click",decimal);
    igual.addEventListener("click",resolver);
    borrar.addEventListener("click",borrado);

    //evento añadido para el boton pi.
    pi.addEventListener("click",Pi);
    
    //funcion para poder imprimir los numeros
    function numero(event){

        //estructura condicional en caso de que el input este vacio
        if (input.value == 0){ //input vacio:
            actualizarDisplay(input.value = event.target.textContent); //usando la funcion actualizarDisplay pasandole que el input.value sea el textContent del boton
        }
        else{//en caso de que no
            actualizarDisplay(input.value += event.target.textContent);//usando la funcion actualizarDisplay pasandole que el input.value se concatene con el textContent del boton
        }
    }

    //funcion para poder guardar el operador aritmetico
    function operacion(event){
        //estructura condicional en caso de que sea multiplicacion
        if (event.target.textContent=="X"){//en caso de que sea multiplicacion el operador sera el simbolo *
            operando = "*";
        }
        else{ //en caso de que sea multiplicacion el operador sera el textContent del boton
            operando = event.target.textContent;
        }
        sustituto = input.value; //guardamos el contenido del input en la variable auxiliar
        sustituto = reemplazarTodo(sustituto); //usamos la funcion reemplazarTodo para poder eliminar los puntos quemarcan los millares del contenido
        op1 = parseFloat(reemplazarComaPorPunto(sustituto)); //guardamos en el operando 1 el contenido de la variable auxiliar convertido a float y usamos la funcion reemplazarComaPorPunto para porder calcular con decimales
        sustituto = 0; //reseteamos la variable auxiliar
        input.value=""; //reseteamos el contenido del input
    }

    //funcion para poder resolver la operacion
    function resolver(event){

        //condicional en caso de que el operando 1 no este vacio
        if (op1!=0){
            sustituto = input.value; //se guarda el contenido del input en la variable auxiliar
            sustituto = reemplazarTodo(sustituto); //usando la funcion reemplazarTodo se quitan todo los puntos que marcan los millares
            op2 = parseFloat(reemplazarComaPorPunto(sustituto));//guardamos en el operando 2 el contenido de la variable auxiliar convertido a float y usamos la funcion reemplazarComaPorPunto para porder calcular con decimales
            sustituto = 0; //reseteamos la variable auxiliar
            resultado = `${op1} ${operando} ${op2}`; //usamos la abreviacion para poder guardar en la variable resultado la expresion completa
            actualizarDisplay(eval(resultado)); //usamos la funcion actualizarDisplay pasandole la expresion evaluada para poder resolver la operacion
            //input.value = String(eval(resultado));
        }
    }

    //funcion para poder imprimir el numero PI
    function Pi(event){
        sustituto = Math.PI.toString(); //guardamos en la variable auxiliar el numero pi convertido a string
        sustituto = sustituto.replace(".",","); //cambiamos el punto por la coma para marcar el decimal usando el metodo replace
        input.value = sustituto; //imprimimos el numero por el input
        sustituto=0; //reseteamos la variable auxiliar
    }

    //funcion para poder marcar la coma decimal
    function decimal(event){
        //condicional para marcar dos casos: si ya existe una coma en el input o no 
        if (input.value.includes(",")){ //en caso de que si haya una coma:
            deci.removeEventListener; //se remueve el evento
        }
        else{//en caso de que no haya como:
            if (input.value!=0){//se mira si el input no esta vacio
                actualizarDisplay(input.value+=event.target.textContent);//haciendo uso de la funcion "actualizarDisplay" para poder concatenar el contenido del input con la coma 
            }
        }
        
    }

    //funcion para poder resetear toda la calculadora
    function borrado(event){
        input.value="";//se borra todo lo que haya en el input
        op1 = 0;//se resetea lo que haya en el operando 1
        operando = "";//se borra lo que haya en el operador
    }

    //funcion para resolver las operaciones que solo necesitan un operando (unitarias)
    function resolverUnitario(event){
        op1 = parseFloat(reemplazarComaPorPunto(input.value)); //se guarda en el operando 1 el contenido del input convertido a float y usando la funcion "reemplazarComaPorPunto" para cambiar la coma por el punto

        //estructura condicional para determinar cada caso de las distintas operaciones unitarias
        switch(event.target.textContent){
            case "√": //en caso de raiz cuadrada
                actualizarDisplay(Math.sqrt(op1));//usamos la funcion actualizarDisplay pasandole la raiz cuadrada del operando 1 usando el metodo sqrt de la clase Math
                break;
            case "x2"://en caso de cuadrado
                actualizarDisplay(Math.pow(op1,2));//usamos la funcion actualizarDisplay pasandole el cuadrado del operando 1 usando el metodo pow de la clase Math
                break;
            case "sen":
                actualizarDisplay(Math.sin(op1));//usamos la funcion actualizarDisplay pasandole el seno del operando 1 usando el metodo sin de la clase Math
                break;
            case "cos":
                actualizarDisplay(Math.cos(op1));//usamos la funcion actualizarDisplay pasandole coseno del operando 1 usando el metodo cos de la clase Math
                break;
            case "tang":
                actualizarDisplay(Math.tan(op1));//usamos la funcion actualizarDisplay pasandole la tangente del operando 1 usando el metodo tan de la clase Math
        }
    }

    //funcion tanto para poder mostrar los puntos de los millares como para mostrar por pantalla los numeros
    function actualizarDisplay(cadena){
        
        //estructura condicional para determinar el tipo primitivo de la variable que le pasamos
        if (typeof (cadena) === "string"){//en caso de que sea string:
            //estructura para determinar si hay o no coma en la variable
            if (!cadena.includes(",")){//en caso de que no:
                cadena = reemplazarTodo(cadena);//usamos la funcion reemplazarTodo para poder eliminar todos los puntos
                cadena = Number(cadena).toLocaleString("de-DE"); //convertimos la cadena a un numero para luego cambiarle el formato al aleman
            }
            
        }
        else{//si no es String es un numero
            cadena = cadena.toLocaleString("de-DE"); //le cambiamos el formatio al aleman
        }
        input.value = cadena;//imprimimos la cadena por pantalla
    }


    //funciones para poder manipular las comas y los puntos
    function reemplazarTodo (variable){
        return variable.replaceAll(".","");
    }

    function reemplazarComaPorPunto(variable){
        return variable.replace(",",".");
    }
    
}