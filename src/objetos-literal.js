const persona = {
    nombre : 'Amnhed',
    apellido: 'Hernandez',
    edad: '30',
    direccion: {
        ciudad: 'Toluca',
        zip: '52100',
        lat: 19.304067498201377,
        lng: -99.65097590973839
    }
}

// para clonar un objeto utilizamos Spread '...'
const persona2 = { ...persona }
persona2.nombre = 'Peter'
console.log( persona )
console.log( persona2 )