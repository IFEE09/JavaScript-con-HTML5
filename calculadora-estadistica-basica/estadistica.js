let elementos = [];
let mostrar_Lista = document.getElementById('mostrar-lista');
let cuenta_elementos = document.getElementById('cuenta-elementos');
let resultado = document.getElementById('resultado');


//Lista de prueba
let lista2 = [
    2,
    3,
    5,
    6,
    1,
    9
];

console.log(calcularPromedio(lista2))

function calcularPromedio(lista) {

    let sumaElementosLista;

    //funcion que devuelve la suma de los elementos del array
    sumaElementosLista = lista.reduce(
        
        function(sumaElementos = 0, elemento) {
            promedioFinal = Number(sumaElementos + elemento);
            return promedioFinal;
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
    let elemento = input_elemento.value;
    cuenta_elementos.style.visibility = 'visible';

    if(elemento === ''){
        Swal.fire({
            icon: 'error',
            title: 'El campo no debe de estar vacio'
        });
    } else {

        elemento = Number(elemento);
        elementos.push(elemento);

        mostrar_Lista.innerHTML = elementos;
        cuenta_elementos.innerHTML = `Existen ${elementos.length} elementos`;
        resultado.innerHTML = '';

    }

}

function ocultarArrayCero() {
    cuenta_elementos.style.visibility = 'hidden';
    cuenta_elementos.innerHTML = "";
}

function eliminarElemento() {

    elementos.pop();
    mostrar_Lista.innerHTML = elementos;
    cuenta_elementos.innerHTML = `Existen ${elementos.length} elementos`;
    cuenta_elementos.style.visibility = 'visible';
    resultado.innerHTML = '';

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

function calcularPromedioElementos() {   

    resultado.style.visibility = 'visible';
    if (elementos.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'La lista debe de contener al menos un elemento'
        });
    } else {
        let promedio = calcularPromedio(elementos);
        resultado.innerHTML = `El promedio de los elementos es ${promedio}`;
    }

}


function calcularMedianaElementos() {

    if (elementos.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'La lista debe de contener al menos un elemento'
        });
    } else {
        let mediana = calcularMediana(elementos);
        resultado.innerHTML = `La mediana de los elementos es ${mediana}`;
    }

}

function  calcularModaElementos() {
    if (elementos.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'La lista debe de contener al menos un elemento'
        });
    } else {
        let moda = calcularModa(elementos);
        resultado.innerHTML = `La moda de los elementos es ${moda}`;
    }

}