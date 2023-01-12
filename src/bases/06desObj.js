const persona={
    nombre:'Marco',
    apellido:'Salazar',
    edad:'22',
    direccion:{
        ciudad:'Abancay',
        lat:15613256,
        lng:1538741
    },
};

console.log(persona.nombre);
const {nombre,apellido,edad}=persona
console.log(nombre, apellido,edad);