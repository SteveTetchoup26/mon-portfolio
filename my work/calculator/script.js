/*import {CalculetteObject} from '../calculatrice/js/librairies/functions.js'*/


window.onload = () =>{

    let elements = document.querySelectorAll(".col-calculette-1 .line-calculette > *");
    let operators = document.querySelectorAll(".col-calculette-2 .line-calculette > *");
    let screan = elements[0];
    let result = operators[0];
    let equal = operators[operators.length -1];
    let cancel =elements[1];
    let del = elements[2];
    let touches = ([].slice.call(elements)).slice(3);
    operators = ([].slice.call(operators)).slice(1, operators.length -1);
    let operatorSelected;

    const CalculetteObject = {
        initEvent: (touches) =>{
            cancel.addEventListener('click', CalculetteObject.initCancel);
            del.addEventListener('click', CalculetteObject.initDelete);
            equal.addEventListener('click', CalculetteObject.initEqual);
            if(touches.length){
                touches.forEach(touche => {
                    touche.addEventListener('click', ()=>{
                        const value = touche.innerText;
                        screan.value += value;
                        result.value = "";
                        console.log(value);
                        operatorSelected = false;
                    })
                });
            }

            if(operators.length){
                operators.forEach(operator => {
                    operator.addEventListener('click', ()=>{
                        if(!operatorSelected){
                            const value = operator.innerText;
                            screan.value += value;
                            console.log(value);
                            operatorSelected = true;
                        }
                     
                    })
                });
            }
        },

        initCancel: () =>{
            screan.value = "";
            result.value = "";
        },

        initDelete: () =>{
            screan.value = screan.value.substring(0, screan.value.length -1);
            result.value = "";
            operatorSelected = false;
        },

        initEqual: ()=>{
            if(!operatorSelected){
                result.value = eval(screan.value);
            }
        }
    }

    CalculetteObject.initEvent(touches);
}

    