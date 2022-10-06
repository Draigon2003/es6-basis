function imprimir( c ){
    console.log( c )
}

//callback: funcion a ejecutar dentro de sumar
function sumar( a, b){
    imprimir(a + b)
}

let resultado=0;

//ejecutar: llamar a sumar
sumar(7 , 8 ,imprimir(resultado) )