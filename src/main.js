import { empleados, salario } from "../public/data/info.js"
import { getEmpleado } from "./services/getEmpleadoService.js"
import { getSalario } from "./services/getSalarioService.js"

const btn = document.getElementById("userNumber")
const salida=document.getElementById("usuarios")

function getIdFromButton(){
    console.log('------------------------------')
    console.log('LLamada a la funcion GET ID FROM BUTTON')
    console.log('------------------------------')

    const input=prompt("Introduce un numero de usuario")
    const id= Number(input)
    if(Number.isNaN(id)){
        alert("no has introducido un numero")
        return
    }
    return id
}

//Ejercicio 1
async function findEmpleado(id) {
    console.log('------------------------------')
    console.log('LLamada a la funcion FIND EMPLEADO')
    console.log('------------------------------')

    try{
        const empleado=await getEmpleado(id)
        console.log(empleado,'empleado')
        salida.textContent=`El empleado buscado es : ${empleado}`

    }catch(error){
        console.log(error,"ERROR")
        salida.textContent=error
    }
}

btn.addEventListener("click",()=>{
    console.log('------------------------------')
    console.log('LLamada a la funcion ADD EVENT LISTENER')
    console.log('------------------------------')

    try{
        const id=getIdFromButton()
        findEmpleado(id)
    }catch(error){
        salida.textContent=error.message
    }
})

function findEmpleado(id){
    console.log('------------------------------')
    console.log('LLamada a la funcion FIND EMPLEADO')
    console.log('------------------------------')
    getEmpleado(id)
        .then((empleado)=>{
            console.log("PROMISE RESOLVE, PASO POR EL THEN")
            console.log(empleado,'empleado')
            salida.textContent=`El empleado busdo es : ${empleado}`
        })
        .catch((error)=>{
            console.log("PROMISE REJECT, PASO POR EL CATCH")
            console.log(error,"error")
            salida.textContent=error
        })
}


function findEmpleado(id){
    console.log('------------------------------')
    console.log('LLamada a la funcion GET ID FROM BUTTON')
    console.log('------------------------------')
    
    Promise.all([getEmpleado(id),getSalario(id)])
        .then(([empleado,salario])=>{
            console.log('PROMISE RESOLVE, PASO POR EL THEN')
            console.log(empleado,'empleado')
            console.log(salario,'salario')
            const p= document.createElement('p')
            p.textContent=`El empleado buscado es: ${empleado} con salario: ${salario}`
            salida.replaceChild(p)
        })
        .catch((err)=>{
            console.log('PROMISE REJECT , PASO POR EL CATCH')
            console.log(err,'err')
            salida.textContent=err
        })
}