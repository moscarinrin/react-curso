/* Objetos literales */

const personas = {

        nombre: 'Oscar',
        apellido: 'Montiel',
        edad: '25',
        direccion: {
            ciudad: "Mexico",
            zip: "08000",
            colonia: "Ramos millan",
        },

};

/* console.log( personas ); */
/* console.table( personas ); */
/* Clonar objetos en ecmascrypt */
const persona2 = {...personas};

persona2.nombre = "Javier";


console.log( persona2)
console.log( personas );