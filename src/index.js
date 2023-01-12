let nombre="";
let apellido="herrera";
if(nombre===""){
    console.log(apellido);
}else{
    console.log(nombre);
}

const result=nombre===''? apellido:nombre;
console.log(result);

const isActive=true;
const message=(isActive)? "activo":"inactivo";
console.log(message);