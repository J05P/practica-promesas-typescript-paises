import { pais } from "../../public/data/info.js";


export async function getPaisService(id: number): Promise<string>{
    console.log("----------------------------------");
    console.log("Llamada a la función GET EMPLEADO")
    console.log("----------------------------------");

    const promesa: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const Pais = pais.find( e => e.id === id)?.nombre

            if(Pais) {
                resolve(Pais);
            } else {
                reject(`pais con id ${id} no existe`)
            }
        }, 800);
    });
    return promesa;
}