//funcion que calcula un precio con descuento
function precioConDescuento(precio, descuento) {
    return ((100-descuento)/100) * precio;
}

function ocultarRespuesta() {
    const respuesta = document.getElementById('respuesta');
    respuesta.style.visibility = "hidden";
}

//interactuando con el html -------------------------------------------------------------------------
function obtenerDescuento() {
    
    const input_Precio = document.getElementById('precio');
    let value_Precio = input_Precio.value;

    const input_Descuento = document.getElementById('descuento');
    let value_Descuento = input_Descuento.value;

    const resuesta = document.getElementById('respuesta');
    respuesta.style.visibility = "visible";

    //validacion para saber si los campos estan vacios
    if(value_Precio === '' || value_Descuento === ''){
        Swal.fire({
            icon: 'error',
            title: 'Los campos no deben de estar vacios'
        });

    } else {

        value_Descuento = Number(value_Descuento);
        value_Precio = Number(value_Precio);

        //Validando que el descuento este entre 0 y 100
        if(value_Descuento < 0 || value_Descuento > 100) {
            Swal.fire({
                icon: 'error',
                title: 'El descuento debe de estar entre 0 y 100'
            });
    
        } else {

            const value_PrecioConDescuento = precioConDescuento(value_Precio, value_Descuento);
            
            const respuesta = document.getElementById('respuesta');
            respuesta.innerText = `El precio con descuento es ${value_PrecioConDescuento.toFixed(2)}`;

        }

        setTimeout(ocultarRespuesta, 3000);

    }

}