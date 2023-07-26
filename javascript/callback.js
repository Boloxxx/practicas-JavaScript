// var devuelveUsuario = function () {
//     return "Camilo"
// }

// var devuelveSaludo = function () {
//     return "Hola"
// }

// var saludar = function (cb1, cb2) {
//     return cb1() + " " + cb2()
// }

// var resultado = saludar(devuelveSaludo, devuelveUsuario)
// console.log(resultado)


var devuelvoFrase = function (comida) {
    return 'Hoy quiero comer: ' + comida
}

var hablar = function (comida, cb) {
    return cb(comida)
}

var fraseFinal = hablar('Pizza', devuelvoFrase)
console.log(fraseFinal)