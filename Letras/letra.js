

function enviar() {
    letra = document.getElementById('letra').value
    console.log (letra.length)

    if (letra.length > 1 ) {
        console.log('entro a if')
        document.getElementById('respuesta').innerHTML = 'Por favor digite solo una letra'
        document.getElementById('letra').value = ''
    } else if (letra.toLowerCase() == 'a' 
    || letra.toLowerCase() == 'e' 
    || letra.toLowerCase() == 'i'
    || letra.toLowerCase() == 'o' 
    || letra.toLowerCase() == 'u') {
        document.getElementById('respuesta').innerHTML = 'Ingreso vocal'
        document.getElementById('letra').value = ''
    } else {
        document.getElementById('respuesta').innerHTML = 'Es consonante'
        document.getElementById('letra').value = ''
    }
    
}