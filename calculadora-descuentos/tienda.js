import Swal from 'sweetalert2';

//funcion que calcula un precio con descuento
function precioConDescuento(precio, descuento) {
    return ((100-descuento)/100) * precio;
}

//interactuando con el html -------------------------------------------------------------------------
function obtenerDescuento() {
    
    const input_Precio = document.getElementById('precio');
    const value_Precio = Number(input_Precio.value);

    const input_Descuento = document.getElementById('descuento');
    const value_Descuento = Number(input_Descuento.value);
    
    if(value_Descuento < 0 || value_Descuento > 100) {
        

    }

}