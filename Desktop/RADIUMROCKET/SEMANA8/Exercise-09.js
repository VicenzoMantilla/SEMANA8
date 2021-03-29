/*Strings:
Create a string variable with at least 2 long words (10 characters and some space in between). 
Use the methods from the previous exercises to generate 
a new string that has the first letter of both words 
in uppercase and the other
letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase and the + operator).
*/

var text1='tErModINaMiCA eLecTROtEcNIA';

var indice1= text1.indexOf('t');
var indice2= text1.indexOf('e');

var firstword= text1[indice1].toUpperCase() + text1.substring(1,13).toLowerCase();
var secondword= text1[indice2].toUpperCase() + text1.substring(15).toLowerCase();

var result= firstword + secondword;

console.log( firstword + ' ' + secondword);


