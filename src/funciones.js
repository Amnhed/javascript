// Funciones en JS

// Una funcion normal 

function saludar( nombre ) {
    return `Hola, ${ nombre } Edad ${ 2*15 }`
} 

console.log( saludar('amnhed'))

//Declarar nuestra funcion como una constante para no sobre escribirla con otra variable

const saludar2 = function( nombre, edad ){
    return `Hola, ${ nombre } edad: ${ edad }`
}
console.log(saludar2('Amnhed 2',30));


// Funciones de flecha

// Con return
const saludar3 = ( nombre ) => {
    return `Hola 3, ${ nombre }` 
}

console.log(saludar3('AMnhed 3'));

// Sin return

const saludar4 = ( nombre ) => `Hola, ${ nombre }` 

console.log(saludar4('AMnhed 4'));

// Sin return

const saludar5 = (  ) => `Hola 5` 
console.log(saludar5('AMnhed 5'));

// Todo lo que quiera regresar entre parentesis (), cuando regreso mas de un elemento

const getUser = ( nombre ) => (
    //objeto a regresar
    {
        uid: 'ABC',
        username: nombre
    }
)
const user = getUser('Amnhed') 
console.log( user )