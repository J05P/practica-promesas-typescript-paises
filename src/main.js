import { getPaisService } from "./services/getPaisService.js";

const btn = document.getElementById("userNumber");
const salida = document.getElementById("usuarios");

function getIdFromButton() {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");

    const input = prompt("Introduce un número de usuario (1-3)");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introducido un número");
        return;
    }
    return id;
}

function findPais(id) {
    getPaisService(id)
        .then((pais) => {
            console.log("PROMISE RESOLVE, PASO POR EL THEN");
            console.log(pais, "pais");
            salida.textContent = `El pais buscado es: ${pais}`;
        })
        .catch((error) => {
            console.log("PROMISE REJECT, PASO POR EL CATCH");
            console.log(error, "error");
            salida.textContent = error;
        });
}

btn.addEventListener("click", () => {
    console.log("----------------------------------------");
    console.log("Llamada a la función ADD EVENT LISTENER");
    console.log("----------------------------------------");

    try {
        const id = getIdFromButton();
        if (id !== undefined)
            findPais(id);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});
