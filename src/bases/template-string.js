const nombre = 'Oscar'
const apellido = "Montiel"

const nombreCompleto = `Hola Amigo `;
const saludo = `${nombre }  ${apellido} ${1 *  200}`

console.log(saludo)


function getSaludo(nombre) {
    return `hola ${nombre}`;
}

console.log(` este es un texto dice :  ${getSaludo(apellido)}`)