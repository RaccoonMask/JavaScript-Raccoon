//****Codigo del cuadrado
console.group("Cuadrado")
//lado del cuadrado
const ladoCuadrado = 5
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`)
//perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado*4
console.log(`El perimetro de mi cuadrado es 4 lados * ${ladoCuadrado} cm = ${perimetroCuadrado} cm`)
//area del cuadrado
const areaCuadrado = ladoCuadrado*ladoCuadrado
console.log(`El area de mi cudrado es ${ladoCuadrado} cm * ${ladoCuadrado} cm = ${areaCuadrado} cm^2`)
console.groupEnd()
//****Codigo del triangulo
console.group("Triangulo")
//Lados del triangulo
const lado_uno = 6
const lado_dos = 6
const lado_tres = 5
const alturaTriangulo = 5.5

//perimetro del triangulo
const perimetroTriangulo = lado_uno+lado_dos+lado_tres
console.log(`Los lados de mi triangulo son: ${lado_uno} cm, ${lado_dos} cm, ${lado_tres} cm`)
console.log(`El perimetro de mi Triangulo es 3 lados ${lado_uno} cm + ${lado_dos} cm + ${lado_tres} cm = ${perimetroTriangulo} cm`)

//Are del triangulo
const areaTriangulo = (lado_tres*alturaTriangulo)/2
console.log(`El area de mi triangulo es (Base: ${lado_tres} * Altura: ${alturaTriangulo}) / 2 = ${areaTriangulo}`)
console.groupEnd()

//Circulo
console.group("Cirulo")
const radioCirculo = 4

const diametroCirculo = radioCirculo*2
console.log(`El diametro de mi circulo es ${diametroCirculo} cm`)
const PI = Math.PI
console.log(`Pi es: ${PI}`)

const perimetroCirculo = diametroCirculo*PI
console.log(`El Perimetro de mi circulo es ${perimetroCirculo} cm`)

const areaCirculo = (radioCirculo*radioCirculo) * PI
console.log(`El Area de mi circulo es ${areaCirculo} cm^2`)

console.groupEnd()