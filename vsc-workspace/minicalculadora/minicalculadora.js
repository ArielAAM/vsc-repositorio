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

    for (let iterator of digito) {
        iterator.addEventListener("click",numero);
        
    }

    for (let iterator of aritmetica){
        iterator.addEventListener("click",operacion);
    
    }
    deci.addEventListener("click",decimal);
    igual.addEventListener("click",resolver);

    borrar.addEventListener("click",borrado);
    
    function decimal(event){
        if (input.value.includes(",")){
            deci.removeEventListener;
        }
        else{
            if (input.value!=0){
                input.value+=event.target.textContent;
            }
        }
        
    }
    function borrado(event){
        input.value="";
        op1 = 0;
        operando = "";
    }
    function resolver(event){
        if (op1!=0){
            sustituto = input.value;
            op2 = parseFloat(sustituto.replace(",","."));
            sustituto = 0;
            resultado = `${op1} ${operando} ${op2}`;
            input.value = String(eval(resultado));
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
        op1 = parseFloat(sustituto.replace(",","."));
        sustituto = 0;
        input.value="";
    }

    function numero(event){
        if (input.value == 0){
            input.value = event.target.textContent;
        }
        else{
            input.value = input.value + event.target.textContent;
        }
    }

    
}