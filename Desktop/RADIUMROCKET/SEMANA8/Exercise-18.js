/* If Else
*/

var age= Math.floor(Math.random()*101);
console.log(age);

if (age>75){
    console.log("Anciano");
}
else if(age>= 61 && age<=75){
    console.log("Adulto Mayor");
}
else if (age>= 31 && age<=60){
    console.log("Adulto");
}
else if (age>= 20 && age<=30){
    console.log("Joven");
}
else if (age>= 13 && age<=19){
    console.log("Adolecente");
}
else if (age>= 2 && age<=12){
    console.log("Niño");
}
else{
    console.log("Bebe");
}
