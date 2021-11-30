let elementos = [];
let mostrar_Lista = document.getElementById('mostrar-lista');
let cuenta_elementos = document.getElementById('cuenta-elementos');

function calcularPromedio(lista) {

    let sumaElementosLista;

    /* for (let i = 0; i < lista.length; i++) {
        sumaElementosLista += lista[i];
    } */

    //funcion que devuelve la suma de los elementos del array
    sumaElementosLista = lista.reduce(
        
        function(sumaElementos = 0, elemento) {
            return sumaElementos + elemento;
        }
    
    );

    const promedioLista = (sumaElementosLista/ lista.length);
    return promedioLista;

}

function calcularMediana(lista) {

    //Ordenando el array de menor a mayor. 
    lista.sort(function(elemento1, elemento2) {
        return elemento1 - elemento2;
    });

    //Se obtienen los elementos para determinar la media. 
    if (lista.length % 2 == 0) {
        const mitadLista_1 = (lista.length / 2);
        const mitadLista_2 = (lista.length / 2) + 1;
        return (lista[mitadLista_1] + lista[mitadLista_2]) / 2;
        
    } else {
        const mitadLista = Math.ceil(lista.length / 2);
        return lista[mitadLista];
    }

}

//funcion que recibe un array
function calcularModa(lista){

    let moda = 0;
    let modaFor = moda;
    let posicionModa;

    /*Se agarra la posicion i, iniciando en 0 y 
    se compara con todo el array en el siguiente for*/
    for(let i = 0; i < lista.length; i++) {

        moda = 0;

        for(let j = 0; j < lista.length; j++) {

            if(lista[i] == lista[j] && i != j){
                moda += 1;
            }

            if(moda >= modaFor) {  
                modaFor = moda;
                posicionModa = i;
            }

        }
    }

    //Devuelve la posicion mas repetida del array. 
    return lista[posicionModa];
  
}

//-----------Intereccion con el HTML -----------------------------------------------------

function agregarElemento() {

    const input_elemento = document.getElementById('input-elemento');
    const elemento = input_elemento.value;
    cuenta_elementos.style.visibility = 'visible';

    if(elemento === ''){
        Swal.fire({
            icon: 'error',
            title: 'El campo no debe de estar vacio'
        });
    } else {

        elementos.push(elemento);

        mostrar_Lista.innerHTML = elementos;
        cuenta_elementos.innerHTML = `Existen ${elementos.length} elementos`

    }

}

function ocultarArrayCero() {
    cuenta_elementos.style.visibility = 'hidden';
}

function eliminarElemento() {

    elementos.pop();
    mostrar_Lista.innerHTML = elementos;
    cuenta_elementos.innerHTML = `Existen ${elementos.length} elementos`;
    cuenta_elementos.style.visibility = 'visible';

    if(elementos.length === 0){
        setTimeout(ocultarArrayCero, 1500);
    }

}

function reiniciar() {
    
    elementos = [];
    mostrar_Lista.innerHTML = elementos;
    cuenta_elementos.innerHTML = `Existen ${elementos.length} elementos`;
    cuenta_elementos.style.visibility = 'visible';

    if(elementos.length === 0){
        setTimeout(ocultarArrayCero, 1500);
    }

}

