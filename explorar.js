// index.js
const {ventas} = require('./datos.js');

console.log ('cantidad de registros:' ventas.length)

console.log('\nPrimer registro:');
console.log(ventas[0])

console.log('\nUltimo registro:');
console.log(ventas[ventas.length -1]);

console.log('\nProductos del registro en la posicion 4:' ventas[4].productos)

console.log('\nTabla completa');
console.table(ventas)
