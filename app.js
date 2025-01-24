let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 3;




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Adivinaste el número secreto en ${intentos}  ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
        alert(`Llegaste al numero máximo de ${maximosIntentos} intentos`)
        asignarTextoElemento('p',`Número máximo de ${intentos}`) 
            asignarTextoElemento('p',' el número secreto es menor');
        } else {
            asignarTextoElemento('p','el número secreto es mayor');
        }
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';  
}
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        
    } else {
        //Si el número generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto de Thalis');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar ek botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}


condicionesIniciales();
