/* Funciones en JS */

const saludar=function( nombre ) {
    return `Hola, ${nombre}`

}
/* Funciones de flecha */

const saludar2 = ( nombre ) => `Hola, ${nombre}`;

/*  mala practica */
/* saludar = 30 */
/* Cuerpo de la funcion de flecha */
const getUser = () => {
    return{
        uid: '123',
        nombre: 'HAUs10',
    }
}

/*Regresando un objeto con ()*/ 
const getUser2 = () => 
     ({
        uid: '123',
        nombre: 'HAUs10',
    })

/* function getUsuarioActivo ( nombre ) {
    return{
        uid: 'ABC',
        nombre: 'Stevia10',
    }
} */

const getUsuarioActivo = ( nombre ) =>
    ({
        uid: 'ABC',
        nombre: nombre,
    });

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)



console.log(saludar("Slobotzky"));
console.log( saludar2("vegueta") );
console.log(getUser());
console.log(getUser2());
