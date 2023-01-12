const nombre="Marco";
const apellido="Salazar";

console.log(nombre,apellido)

//console.log(nombre +" "+ apellido); forma de uso antiguo
const nombreCompleto=`${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(){
    return "Hola"+" "+ nombre
}
console.log(`este es un saludo: ${getSaludo(nombre)}`);