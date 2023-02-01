var euro = 0
var usa = 0
var cop = 0


function convertir() {
    cantidad = document.getElementById('cantidad').value 
    console.log(cantidad)
    tipo = parseInt(document.getElementById('moneda').value)
    console.log(tipo)

    switch (tipo) {
        case 1:
            console.log('ingreo a 1')
            euro = cantidad / 4660
            dolar = cantidad / 4734
            break;
        case 2:
            console.log('ingreo a 2')
            break;
        case 3:
            console.log('ingreo a 3')
            break;
    }
    document.getElementById('resultado').innerHTML = 'La conversion en euro es:' +euro+ 
    ' <br> La conversion en dolar es:' +dolar
}