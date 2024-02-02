let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asiganarTextoElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asiganarTextoElementos('p',`¡Es correcto! acertaste en ${intentos} ${(intentos>1 ? "intentos":"intento") }`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    }else if (numeroDeUsuario>numeroSecreto){
        asiganarTextoElementos('p','El numero es menor');
        intentos++;
        limpiarCaja();

    }else{
        asiganarTextoElementos('p','El numero es mayor')
        intentos++;
        limpiarCaja();
    }

    intentosMaximos();

    return;

}

function generarNumero(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;


    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    
    if(listaNumerosSorteados.length == numeroMaximo){
            asiganarTextoElementos ('p','Ya se sortearon todos los numeros posibles');      
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumero();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;   
        }
    }
}

function intentosMaximos(){
    if(intentos>=4){
        asiganarTextoElementos('p',`Maximos intentos permitidos alcanzados, el numero era ${numeroSecreto}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
}



function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
   
}

function condicionesIniciales(){
    asiganarTextoElementos('h1','Secrets number´s game');
    asiganarTextoElementos('p',`Digite un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //condiciones iniciales
    condicionesIniciales();
    //generar numero aleatorio
   
    //deshabilitar boton
    document.getElementById('reiniciar').setAttribute('disabled',true)

}

condicionesIniciales();