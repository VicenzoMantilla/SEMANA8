/*Strings:
Create a string variable with at least 10 characters 
and generate a new string with the first letter in uppercase 
and the others in lowercase. 
Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).
*/

var text1= 'eLEctrOtECNia';

var textf= text1.substring(0,1).toUpperCase() + text1.substring(1,13).toLowerCase();

console.log('The word is: ' + textf);