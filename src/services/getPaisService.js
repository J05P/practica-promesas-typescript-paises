import {Pais} from "../../public/data/info.js"


export function getPais(id){
    console.log('------------------------------')
    console.log('LLamada a la funcion GET ID FROM BUTTON')
    console.log('------------------------------')

    const promesa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pais=Pais.find(e=> e.id=== id)?.nombre

            if(pais){
                resolve(pais)
            }else{
                reject(`Pais con id ${id} no existe`)
            }
        },800)
    })
    return promesa
}