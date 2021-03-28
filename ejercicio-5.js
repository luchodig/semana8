/*a) */
var arraycinco = ['one', 'two', 'three', 'four', 'five'];
for(var i = 0; i < 5; i++) {
    alert(arraycinco[i]);
}
/*b) */
for(var i = 0; i < 5; i++) {    
    alert(arraycinco[i][0].toUpperCase() + arraycinco[i].substring(1,arraycinco[i].length));
}
/*c) */
var sentence = '';
for (i = 0; i < 5; i++) {
    sentence += arraycinco[i];
}
alert(sentence);
/*d) */
var arrayD=[];
for (i = 0; i < 10; i++) {
    arrayd.push(i);
}
console.log(arrayd); 