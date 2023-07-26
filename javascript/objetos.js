// var deportes = {
//     conBalon: ['Basketball', 'Futbol'], 
//     SinBalon: ['suf', 'Vitilla', 'Ciclismo']
// }

// var persona = {
//     nombre: ['Bryan'],
//     edad: [25],
//     estudios: { esProgramador: true }
// }


// // DOT NOTATION
// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// // BRACKET NOTATION
// atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);


// var comidas = {}
// var diferenciasNotaciones = function (propUno, propDos) {
//     comidas[propUno] = ['Frutas', 'Vegetales']
//     comidas[propDos] = ['Hamburguesas', 'Papas fritas']
// }

// diferenciasNotaciones('saludables', 'noSaludables')
// console.log(comidas)

// var libro = { autor: 'Pedro El arquitecto', anyo: 1990, genero: 'Social' }
// var tienePropiedad = libro.hasOwnProperty('autor')

//console.log(tienePropiedad)

// var todasLasPropiedades = Object.keys(libro)
// console.log(todasLasPropiedades)

// var mundo = {continentes: 7, paises: 195, oceanos: 5 }

// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ' + prop);
//     console.log('Este es el valor: ' + mundo[prop]);
//  }

// var perro = {
//     raza: "Pastor Aleman", 
//     edad: "1 anyo", 
//     dueno: "Bryan rodriguez",
//     info: function() {
//         console.log("Mi perro es un " + this.raza)
//     }

// }

// perro.info()


var login = [ 
{
    nombre: "Bryan",
    email: "bryanrodriguezalmonte@gmail.com",
    password: "123456"
 },
 {
    nombre: "pedro",
    email: "pedro33@gmail.com",
    password: "123456"
 },
 {
    nombre: "carlos",
    email: "carlos33@gmail.com",
    password: "123456"
}
]

for (let i = 0; i < login.length; i++) {
    console.log("======================")
    console.log("Nombre: " + login[i].nombre)
    console.log("email: " + login[i].email)
    console.log("password: " + login[i].password)
}
