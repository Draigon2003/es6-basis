//traer la dependencia del componenet suma
import { sumar , restar } from './sumar.js'
import materias  from './materias.js'
//recorrido de arreglo: forEach
materias.forEach((materia)=>{
    if(materia.profesor === 'Cristian Buitrago')
    console.log(`notas:${materias.name}`)
    console.log( `materia:${materias.notas}`)})
//convertir a un arreglo  de profesores
//metodo map()
let profesor = materias.map(function(materia){
    return materia.profesor
})

//agregar una materia al arreglo de materias
//push
materias.push({
    id:5,
    name:"Cultura Fisica",
    profesor:"Luis Baquero",
    notas:[
        2.0,
        3.5
    ]
})

//busqueda en arreglo:
//find 
const PHP= materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})
console.log(PHP)
//let: variables
//let a = 10
//const: constantes
//const b = 29

//desestructurar
/*let {first_name ,last_name ,id , DNI} = estudiantes

console.log(`suma de a+b:${ sumar(a , b) }`)
console.log(`resta de a+b:${ restar(a , b) }`)
console.log(`Nombre estudiantes ${ first_name}`)
console.log(`Apellido estudiantes ${ last_name}`)
console.log(`id estudiantes ${id}`)
console.log(`DNI estudiantes ${DNI}`)*/