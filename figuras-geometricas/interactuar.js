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

function alturaTriangulo(base, ladoChico) {
    return ((base)**2 + (ladoChico)**2)**(1/2);
}

const alturaTriangulo_ = alturaTriangulo(baseTriangulo1, ladoTriangulo1);

function areaTriangulo(altura, base) { 
    return (base * altura)/2;
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

//aqui interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es ${perimetro}`);
    
}

function calcularAreaCuadrado() {

    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    
    alert(`El area del cuadrado es ${area}`);

}


