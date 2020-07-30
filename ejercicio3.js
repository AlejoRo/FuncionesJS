var siva = 0;
const ivaporc = 2.1;
var ivacal = 0;
var total = 0;

siva = parseInt(prompt('digite el valor'));

total = factura (siva);

function factura (precio){
    ivacal = precio/100*21;
    total = precio+ivacal;
    console.log('Precio sin IVA: '+precio+', IVA: '+ivaporc+' y total: '+total);
}
