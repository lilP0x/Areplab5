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
       
    }
}

async function enviarDatos() {
    const inputDireccion = document.getElementById("inputDireccion").value;
    const inputPrecio = parseFloat(document.getElementById("inputPrecio").value);  
    const inputTamaño = parseFloat(document.getElementById("inputTamaño").value); 
    const inputDescripcion = document.getElementById("inputDescripcion").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ address: inputDireccion, price:inputPrecio, size:inputTamaño, description:inputDescripcion })
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById("postResultado").innerText = `La solicitud fue completada`;
        } else {
            document.getElementById("postResultado").innerText = "Error en la petición.";
        }
    } catch (error) {
        console.error("Error enviando datos:", error);
        document.getElementById("postResultado").innerText = "Error en la petición.";
    }
}