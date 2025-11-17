import { Region } from "../../public/data/info.js";

export function getRegion(id){
        console.log('------------------------------')
        console.log('LLamada a la funcion GET ID FROM BUTTON')
        console.log('------------------------------')
    
        const promesa=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const region=Region.find(e=> e.id=== id)?.salario
    
                if(region){
                    resolve(region)
                }else{
                    reject(`Region con id ${id} no existe`)
                }
            },800)
        })
        return promesa
}