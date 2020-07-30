var a = 0;
var b = 0;
var c = 0;
var d = 0;
var calcularMedia = 0;

a = parseInt(prompt('Digita número a'));
b = parseInt(prompt('Digita número b'));
c = parseInt(prompt('Digita número c'));
d = parseInt(prompt('Digita número d'));

calcularMedia = media (a, b, c, d);

function media (na, nb, nc, nd){
    const resultado = (na + nb + nc + nd)/4;
    console.log('el resultado de la media es: '+ resultado );
}
