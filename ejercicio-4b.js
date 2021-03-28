var age = parseInt(100*Math.random());
console.log(age);
if (age < 2) {
    alert('Bebe');
} else if(age >= 2 && age <= 12) {
    alert('Nino');
} else if (age >= 13 && age <= 19) {
    alert('Adolecente');
} else if (age >= 20 && age <= 75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}
