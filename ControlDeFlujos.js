function viajar(destino) {
    if (destino === 'Republica Dominicana') {
        return("Gire a la izquierda")
    } 
    
    else if (destino === 'Estados unidos') {
        return("Gire a la derecha")
    } 
    
    else {
        return("Nos perdimos")
    }
}

viajar('Estados unidos')

function PuedeManejar(edad) {
    if (edad >= 18) {
        return true
    }

    else (edad < 18)
    return false
}

PuedeManejar(30)