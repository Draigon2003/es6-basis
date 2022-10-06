let colors = require('colors');
const estudiantes1 = ['Nicolas Peraza','Maicol Correa','Yerson Bohorquez']
const estudiantes2 = ['Juan Medina','enrique vega','julian sandoval']
const estudiantes3 = [ 'yari cufiño', ...estudiantes1,'paula',...estudiantes2]
//operador spread(resto)
//console.log(estudiantes1[0] )
//desestructuracion arreglo:
let [ NP, MC, YB] = estudiantes1
console.log( NP.random.underline, MC.underline.magenta, YB.trap.cyan)


console.log(estudiantes3)

