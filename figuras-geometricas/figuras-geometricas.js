//Este es un ejemplo de lo que queremos visualizar en el HTML con JS. 

//condigo de los cuadrados. 
console.group('Cuadrados');
const ladoCuadrado1 = 5;
const perimetroCuadrado1 = ladoCuadrado1 * 4;
const areaCuadrado1 = (ladoCuadrado1)**2;

console.log(`los lados del cuadrado miedn: ${ladoCuadrado1}`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado1}`);
console.log(`El area del cuadrado es: ${areaCuadrado1}`);
console.groupEnd();

//codigos de los triangulos
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo1 = 4;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo1;
const alturaTriangulo = ((baseTriangulo1)**2 + (ladoTriangulo1)**2)**(1/2);
const areaTriangulo = (alturaTriangulo * baseTriangulo1)/2;

console.log(`Los lados del triangulo son: ${ladoTriangulo1}, ${ladoTriangulo2} y ${baseTriangulo1}`);
console.log(`El perimetro del triangulo es ${perimetroTriangulo}`);
console.log(`El area del triangulo es ${areaTriangulo}`);
console.groupEnd();

//codigos de los circulos
console.group('Circulos');
const radioCirculo1 = 4;
const diametroCirculo1 = radioCirculo1 * 2;
const PI = Math.PI;
const perimetroCirculo1 = diametroCirculo1 * PI;
const areaCirculo = PI * (radioCirculo1)**2;

console.log(`El radio de nuestro circulo es ${radioCirculo1}`);
console.log(`El perimetro de nuestro circulo es ${perimetroCirculo1}`);
console.log(`El area del circulo es ${areaCirculo}`);
console.groupEnd();
