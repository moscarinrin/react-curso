 /* DESTRUCCTURACION DE OBJETOS */
/* Asignacion destructurante */

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};


console.log(persona.nombre);

console.log(persona.edad);

console.log(persona.clave);


/* Esto es tediosos */


/* Extraer lo que me interesa sin necesidad de usar persona */

const { nombre:nombre2 } = persona;
const { edad, nombre, clave} = persona;

console.log(nombre2);
console.log(edad);
console.log(nombre);
console.log(clave);

const retornoPersona = ( usuario ) => {
    const { edad, nombre, clave} = usuario;
   
}


retornoPersona( persona );

/* Destruccturacion directo en el argumento */
const retornoPersona1 = ( {nombre, clave, edad} ) => {
/*     console.log(nombre) */
return{
    nombreClave: clave,
    anios: edad,

}
   
}

/*Estoy retornando un objeto y ese objeto lo que quiero es solo el nombreClave y los anios 
asi que se hace la destructuracion del objeto en la misma llamada a la funcion del lado izquierdo
 */
const {nombreClave, anios} = retornoPersona1 ( persona );
console.log(nombreClave , anios);


/* Cuando retornamos objetos de objetos */
const retornoPersona2 = ( {nombre, clave, edad} ) => {
    /*     console.log(nombre) */
    return{
        nombreClave1: clave,
        anios1: edad,
        nombre1: nombre,
        habilidades:{
            volar: 10,
            matar:10,
            
        }
    }
       
    }
/* Cuando retornamos objetos de objetos */
const {nombreClave1, anios1, habilidades:{volar, matar}} =  retornoPersona2(persona);
console.log(nombreClave1, anios1, volar, matar);