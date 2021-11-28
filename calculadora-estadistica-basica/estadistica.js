const lista1 = [
    100, 
    200,
    300,
    500
];


function calcularMedia(lista) {

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


console.log(calcularMedia(lista1));
