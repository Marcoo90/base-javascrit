const persona={
    nombre:'Marco',
    apellido:'Salazar',
    edad:'22',
    direccion:{
        ciudad:'Abancay',
        lat:15613256,
        lng:1538741
    }
}
const Persona2={...persona};
console.log(persona.direccion);
console.log(persona2);
Persona2.nombre='Boby';
console.log(persona2.nombre);