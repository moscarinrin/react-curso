//  Peticiones http

// Fetch API por cuestiones del curso



const api = "JIKoygUG7bIevgqLY1fl7ADdPXmqAwD4";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api }`);

// peticion.then(resp => {
//     //respuesta.json
//     resp.json().then( data => {
//         console.log(data.data)
//         // Exraer la data
//     })

// })
// Desestructuracion de la respuesta para obtener ciert data de la data

peticion
        .then( resp => resp.json())
        .then(({ data }) => {
            console.log( data.images.original.url );
            const {url} = data.images.original;
            const image = document.createElement('img');
            image.src = url;
            document.body.append(image);
        })

.catch(console.warn);