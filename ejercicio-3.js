/*a) */
var currentYear =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(currentYear[4]);
console.log(currentYear[10]);
/* b)*/
console.log(currentYear.sort());
/*c) */
currentYear.push('primero');
currentYear.unshift('ultimo');
console.log(currentYear);
/*d)*/
currentYear.shift();
currentYear.pop();
console.log(currentYear);
/*e)*/
console.log(currentYear.reverse());
currentYear = currentYear.reverse();
/*f) */
var unifiedCurrentYear= currentYear.join('-');
console.log(unifiedCurrentYear);
/*g)*/
var slicedCurrentYear = currentYear.slice(4,11);
console.log(slicedCurrentYear);