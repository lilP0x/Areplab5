const API_URL = "http://localhost:8080/v1/properties"; 

     
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnObtener").addEventListener("click", obtenerDatos);
    document.getElementById("btnEnviar").addEventListener("click", enviarDatos);
});

async function obtenerDatos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById("resultado").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error obteniendo datos:", error);
        document.getElementById("resultado").innerText = "Error al obtener datos.";
    }
}

async function enviarDatos() {
    const inputData = document.getElementById("inputData").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mensaje: inputData })
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById("postResultado").innerText = `Respuesta: ${JSON.stringify(result)}`;
        } else {
            document.getElementById("postResultado").innerText = "Error en la petición.";
        }
    } catch (error) {
        console.error("Error enviando datos:", error);
        document.getElementById("postResultado").innerText = "Error en la petición.";
    }
}