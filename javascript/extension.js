class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre + ' y mi edad es ' + this.edad + ' Años')
    }
}

class Programador extends Persona {
    constructor(nombre, edad, anosDeEsxperiencia) {
        super(nombre, edad)
        this.anosDeEsxperiencia = anosDeEsxperiencia
    }

    codear() {
        console.log('Soy ' + this.nombre + ". Codeo desde hace " + this.anosDeEsxperiencia + " anos ")
    }
}

var bryan = new Persona('Bryan', 26)
var programador = new Programador('Maria', 34, 3)
// bryan.saludar()

programador.saludar()