const lista1 = [
    100, 
    200,
    300,
    500, 
    100,
    200,
    300,
    400, 
];


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

function calcularMedia(lista) {

    //Ordenando el array de menor a mayor. 
    lista.sort(function(elemento1, elemento2) {
        return elemento1 - elemento2;
    });

    console.log(lista);

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

function calcularModa(lista){
    
}


console.log(calcularPromedio(lista1));
calcularMedia(lista1);