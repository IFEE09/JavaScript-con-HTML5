//console.group('Cuadrados');
//condigo de los cuadrados. 
const ladoCuadrado1 = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado**2;
}

/* console.log(`los lados del cuadrado miden: ${ladoCuadrado1}`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado1)}`);
console.log(`El area del cuadrado es: ${areaCuadrado(ladoCuadrado1)}`);
console.groupEnd(); */

//codigos de los triangulos
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo1 = 4;

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(lado1, lado2, lado3) { 
    //aqui se aplica la formula de heron
    const s  = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
    return area;
}

/* console.log(`Los lados del triangulo son: ${ladoTriangulo1}, ${ladoTriangulo2} y ${baseTriangulo1}`);
console.log(`El perimetro del triangulo es ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo1)}`);
console.log(`El area del triangulo es ${areaTriangulo(alturaTriangulo_, ladoTriangulo1)}`);
console.groupEnd(); */

//codigos de los circulos
const radioCirculo1 = 4;

function diametroCirculo(radio){
    return radio * 2;
}

const diametroCirculo_ = diametroCirculo(radioCirculo1);

const PI = Math.PI;

function perimetroCirculo(perimetro) {
    return perimetro * PI;
}

function areaCirculo(radio) {
    return (radio**2) * PI;
}

/* console.log(`El radio de nuestro circulo es ${radioCirculo1}`);
console.log(`El perimetro de nuestro circulo es ${perimetroCirculo(diametroCirculo_)}`);
console.log(`El area del circulo es ${areaCirculo(radioCirculo1)}`);
console.groupEnd(); */

//----------------aqui interactuamos con el html -------------------------------------------------

function calcularPerimetroCuadrado() {

    const input = document.getElementById('inputCuadrado');
    const value = input.value;  

    //validando que los campos no esten vacios. 
    if(value === ""){
        alert(`El campo del cuadrado no puede estar vacio`);
    } else {
        const perimetro = perimetroCuadrado(value);
        alert(`El perimetro del cuadrado es ${perimetro}`);
    }
    
}

function calcularAreaCuadrado() {

    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    //validando que los campos no esten vacios. 
    if(value === "") {
        alert(`El campo del cuadrado no puede estar vacio`)
    } else {
        Number(value);
        const area = areaCuadrado(value);
        alert(`El area del cuadrado es ${area}`);
    }

}

function calcularPerimetroTriangulo() {

    const input_1 = document.getElementById('inputLadoTriangulo1');
    const lado_1 = input_1.value;
    const input_2 = document.getElementById('inputLadoTriangulo2');
    const lado_2 = input_2.value;
    const input_3 = document.getElementById('inputLadoTriangulo3');
    const lado_3 = input_3.value;
    
    typeof(lado_1);

    //Validando que los campos no esten vacios
    if (lado_1 === "" || lado_2 === "" || lado_3 === "") {
        alert(`Todos los campos deben de contener un numero`);
    } else {
        Number(lado_1);
        Number(lado_2);
        Number(lado_3);
        const perimetro = perimetroTriangulo(lado_1, lado_2, lado_3);
        alert(`El perimetro del triangulo es ${perimetro}`)
    }

}

function calcularAreaTriangulo() {

    const input_1 = document.getElementById('inputLadoTriangulo1');
    const lado_1 = input_1.value;
    const input_2 = document.getElementById('inputLadoTriangulo2');
    const lado_2 = input_2.value;
    const input_3 = document.getElementById('inputLadoTriangulo3');
    const lado_3 = input_3.value;

    //Validando que los campos no esten vacios
    if (lado_1 === "" || lado_2 === "" || lado_3 === "") {
        alert(`Todos los campos deben de contener un numero`);
    } else {
        Number(lado_1);
        Number(lado_2);
        Number(lado_3);
        const perimetro = areaTriangulo(lado_1, lado_2, lado_3);
        alert(`El perimetro del triangulo es ${perimetro}`)
    }
    
}

function calcularPerimetroCirculo() {

    const input_Radio = document.getElementById('inputRadioCirculo');
    const radio = input_Radio.value;

    if (radio === "") {
        alert(`El campo del circulo no debe de estar vacio`);
    } else {
        Number(radio);
        const perimetro = perimetroCirculo(radio);
        alert(`El perimetro del circulo es ${perimetro}`)
    }

}

function calcularAreaCirculo() {
    
    const input_Radio = document.getElementById('inputRadioCirculo');
    const radio = input_Radio.value;

    if (radio === "") {
        alert(`El campo del circulo no debe de estar vacio`);
    } else {
        Number(radio);
        const area = areaCirculo(radio);
        alert(`El area del circulo es ${area}`);
    }

}





