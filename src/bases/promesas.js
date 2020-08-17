/* Promesas */

 /* Las promesas se crean con  */
const promesa = new Promise((resolve, reject)  => {
    setTimeout(() => {
        resolve();
    }, 2000 )
});

/* Caen en un lugar especial y hasta que se termina lo asincrono va con las promesas */
/* Lo ultimo que se ejecuta */
promesa.then( () =>{
    console.log('Then de la promesa')
}) 