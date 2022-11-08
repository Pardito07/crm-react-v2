export async function obtenerClientes(){
    const url = import.meta.env.VITE_API_URL;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
}

export async function agregarCliente(datos){
    try {
        const url = import.meta.env.VITE_API_URL;
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerCliente(id){
    const url = import.meta.env.VITE_API_URL;
    const respuesta = await fetch(`${url}/${id}`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function actualizarCliente(id, datos){
    try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarCliente(id){
    try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url, {
            method: 'DELETE'
        });
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}