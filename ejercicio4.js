var borocon = 0;
var content = 0;
var padding = 0;
var margin = 0;

borocon = parseInt(prompt('Seleccionar content(1) o border-box(2)'));
content = parseInt(prompt('Introduce content'));
padding = parseInt(prompt('introduce padding'));
margin = parseInt(prompt('insertar margin'));

if (borocon == 1){
    border = cborder (content);
} else if (borocon == 2 ){
    cont = cbox (content, padding, margin);
}

function cbox (a, b, c){
    espacio = a + b + c;
    console.log('el ancho total del contenido es: ' + espacio);
}
function cborder (a){
    console.log('el ancho del contenido es: ' + content);
}
