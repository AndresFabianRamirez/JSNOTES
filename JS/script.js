const numero1 = document.getElementById('n1');
const operacion1 = document.getElementById('op1')
const numero2 = document.getElementById('n2');
const boton1 = document.getElementById('b1');
const parrafo1 = document.querySelector('#p1');
const h1 = document.querySelector('.h1')


console.log(h1);


function clikear(){
    switch(operacion1.value){
        case "suma":
            const suma=Number(numero1.value) + Number(numero2.value);
            parrafo1.innerText ='el resultado es: ' + suma;
            break;
        case "resta":
            const resta=Number(numero1.value) - Number(numero2.value);
            parrafo1.innerText ='el resultado es: ' + resta;
            break;
        case "producto":
            const producto=Number(numero1.value) * Number(numero2.value);
            parrafo1.innerText ='el resultado es: ' + producto;
            break;
        case "division":
            const division=Number(numero1.value) / Number(numero2.value);
            parrafo1.innerText ='el resultado es: ' + division;
            break;
        default:
            parrafo1.innerText ='Su elección es incorrecta' ;
    }
  
} 