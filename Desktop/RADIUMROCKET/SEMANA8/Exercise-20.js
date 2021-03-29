/*FOR
*/

var semana=["lunes", "martes", "miercoles","jueves","viernes"];

for (var i=0; i<(semana.length); i++){
    semana[i]=semana[i][0].toUpperCase() + semana[i].substring(1);
    alert(semana);
}
