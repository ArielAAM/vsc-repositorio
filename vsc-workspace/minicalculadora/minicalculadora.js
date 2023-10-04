//evento 
window.onload = function(){
    var resultado = "";
    var op1 = 0;
    var op2 = 0;
    var operando = "";
    var sustituto = "";

    let input = document.querySelector("input");
    let digito = document.querySelectorAll(".digito");
    let aritmetica = document.querySelectorAll(".aritmetica");
    let igual = document.querySelector(".igual");
    let borrar = document.querySelector("#borrar");
    let deci = document.querySelector("#decimal");
    let unitario = document.querySelectorAll(".unitario");
    let pi = document.querySelector("#pi");
    for (let iterator of digito) {
        iterator.addEventListener("click",numero);
        
    }

    for (let iterator of aritmetica){
        iterator.addEventListener("click",operacion);
    
    }

    for (let iterator of unitario){
        iterator.addEventListener("click",resolverUnitario);
    }
    deci.addEventListener("click",decimal);
    igual.addEventListener("click",resolver);

    borrar.addEventListener("click",borrado);

    pi.addEventListener("click",Pi);
    function Pi(event){
        sustituto = Math.PI.toString();
        sustituto = sustituto.replace(".",",");
        input.value = sustituto;
        sustituto=0;
    }
    function decimal(event){
        if (input.value.includes(",")){
            deci.removeEventListener;
        }
        else{
            if (input.value!=0){
                actualizarDisplay(input.value+=event.target.textContent);
            }
        }
        
    }
    function borrado(event){
        input.value="";
        op1 = 0;
        operando = "";
    }

    function resolverUnitario(event){
        op1 = Number(input.value);

        switch(event.target.textContent){
            case "√":
                actualizarDisplay(Math.sqrt(op1));
                break;
            case "x2":
                actualizarDisplay(Math.pow(op1,2));
                break;
            case "sen":
                actualizarDisplay(Math.sin(op1));
                break;
            case "cos":
                actualizarDisplay(Math.cos(op1));
                break;
            case "tang":
                actualizarDisplay(Math.tan(op1));
        }
    }

    function resolver(event){
        if (op1!=0){
            sustituto = input.value;
            sustituto = sustituto.replaceAll(".","");
            op2 = parseFloat(sustituto.replace(",","."));
            sustituto = 0;
            resultado = `${op1} ${operando} ${op2}`;

            actualizarDisplay(eval(resultado));
            //input.value = String(eval(resultado));
        }
    }

    function operacion(event){
        if (event.target.textContent=="X"){
            operando = "*";
        }
        else{
            operando = event.target.textContent;
        }
        sustituto = input.value;
        sustituto = sustituto.replaceAll(".","");
        op1 = parseFloat(sustituto.replace(",","."));
        sustituto = 0;
        input.value="";
    }

    function numero(event){
        if (input.value == 0){
            actualizarDisplay(input.value = event.target.textContent);
        }
        else{
            actualizarDisplay(input.value += event.target.textContent);
        }
    }

    function actualizarDisplay(cadena){
        
        if (typeof (cadena) === "string"){
            if (!cadena.includes(",")){
                cadena = cadena.replaceAll(".","");
                cadena = Number(cadena).toLocaleString("de-DE");
            }
            else{
                cadena = cadena.toLocaleString("de-DE");
            }
        }
        input.value = cadena;
    }
    
}