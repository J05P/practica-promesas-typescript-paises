import { pais } from "../../public/data/info.js";

export function getPaisService(id) {
    console.log("----------------------------------");
    console.log("Llamada a la función GET EMPLEADO");
    console.log("----------------------------------");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Pais = pais.find(e => e.id === id)?.nombre;

            if (Pais) {
                resolve(Pais);
            } else {
                reject(`pais con id ${id} no existe`);
            }
        }, 800);
    });
}
