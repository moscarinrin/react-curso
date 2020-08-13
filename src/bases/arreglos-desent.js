/* Desestructuracion de arrgelos  */

const personajes = ["Goku", "Veguetta" , "Picoolo"];

const [ , , p3 ] = personajes;

console.log(p3)

/* Picoolo */

const retornaArreglo = () => {
    return ["ABC" ,  123]
}

const [letras] = retornaArreglo();

console.log(letras);
/* ABC */


const useState = (valor) => {
    return [valor, () => {console.log("No entiendo esta wea")}];
}

const arr = useState("Goku")
arr[1]();
