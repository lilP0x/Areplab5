const API_URL = "/v1/properties";
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnObtener").addEventListener("click", obtenerDatos);
    document.getElementById("btnEnviar").addEventListener("click", enviarDatos);
    document.getElementById("btnActualizar").addEventListener("click", actualizarDatos);
    document.getElementById("btnEliminar").addEventListener("click", eliminarDatos);
});

async function obtenerDatos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const tablaBody = document.getElementById("tablaBody");
        tablaBody.innerHTML = ""; 

        data.forEach(propiedad => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${propiedad.id}</td>
                <td>${propiedad.address}</td>
                <td>$${propiedad.price.toLocaleString()}</td>
                <td>${propiedad.size} m²</td>
                <td>${propiedad.description}</td>
            `;
            tablaBody.appendChild(fila);
        });

    } catch (error) {
        console.error("Error obteniendo datos:", error);
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
            body: JSON.stringify({
                address: inputDireccion,
                price: inputPrecio,
                size: inputTamaño,
                description: inputDescripcion
            })
        });

        const result = await response.json();
        if (response.ok) {
            document.getElementById("postResultado").innerText = `Propiedad creada: ${JSON.stringify(result)}`;
        } else {
            document.getElementById("postResultado").innerText = `Error: ${result.message || "No se pudo crear la propiedad."}`;
        }
    } catch (error) {
        console.error("Error enviando datos:", error);
        document.getElementById("postResultado").innerText = "Error en la petición.";
    }
}

async function actualizarDatos() {
    const propertyId = document.getElementById("inputIdActualizar").value; 
    if (!propertyId) {
        alert("Debes ingresar un ID para actualizar");
        return;
    }

    const inputDireccion = document.getElementById("inputDireccionActualizar").value;
    const inputPrecio = parseFloat(document.getElementById("inputPrecioActualizar").value);
    const inputTamaño = parseFloat(document.getElementById("inputTamañoActualizar").value);
    const inputDescripcion = document.getElementById("inputDescripcionActualizar").value;

    try {
        const response = await fetch(`${API_URL}/${propertyId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                address: inputDireccion,
                price: inputPrecio,
                size: inputTamaño,
                description: inputDescripcion
            })
        });

        const result = await response.json();
       
    } catch (error) {
        console.error("Error actualizando datos:", error);
        document.getElementById("postResultado").innerText = "Error en la petición.";
    }
}

async function eliminarDatos() {
    const propertyId = document.getElementById("inputIdEliminar").value; 
    if (!propertyId) {
        alert("Debes ingresar un ID para eliminar");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${propertyId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.getElementById("postResultado").innerText = `Propiedad con ID ${propertyId} eliminada`;
        } else {
            document.getElementById("postResultado").innerText = `Error al eliminar la propiedad`;
        }
    } catch (error) {
        console.error("Error eliminando datos:", error);
        document.getElementById("postResultado").innerText = "Error en la petición.";
    }
}
