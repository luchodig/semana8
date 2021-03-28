var sting = 'supercalifragilistico superespialidoso'
var x = sting.indexOf(' ');
var CompleteString = sting.substring(0,1).toUpperCase() + sting.substring(1,x).toLowerCase() + ' '
  + sting.substring(x+1,x+2).toUpperCase() + sting.substring(x+2,sting.length).toLowerCase();
console.log(CompleteString);