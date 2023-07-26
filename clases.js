// // function Auto(puertas, color, marca, ano, ruedas) {
// //     this.puertas = puertas;
// //     this.color = color;
// //     this.marca = marca;
// //     this.ano = ano;
// //     this.ruedas = ruedas;

// //     this.informacion = function () {
// //         console.log("Este es un " + this.marca + " de color " + this.color)
// //     }
// // }
// // var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4)

// // // console.log(miPrimerAuto)
// // // console.log(miPrimerAuto.marca)

// // miPrimerAuto.informacion()

// class Auto{
//     constructor(puertas, color, marca, ano, ruedas) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.ano = ano;
//         this.ruedas = ruedas;
//     }

//     informacion() {
//         console.log("Este es un " + this.marca + ' De color ' + this.color)
//     }
// }



// var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015)

// miSegundoAuto.informacion()
// // console.log(miSegundoAuto)

class Football{
    constructor(jugador) {
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log("Este Jugador pertenece a " + this.jugador);
}

}

var argentina = new Football('Messi')
var brasil = new Football('Pele')

argentina.obtenerNombre()
brasil.obtenerNombre()