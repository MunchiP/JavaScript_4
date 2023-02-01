// largo = window.prompt('ingrese el largo', 0);
// ancho = window.prompt('ingrese el ancho', 0);
// precio = window.prompt('ingrese el precio por metro cuadrado', 0);


descuento = 0
valorTotal = 0
descuentoAplica = 0
valor_lote = 0

function calcularPrecio() {
    
largo = parseFloat(document.getElementById('largo').value)  
ancho = parseFloat(document.getElementById('ancho').value) 
precio = parseFloat(document.getElementById('precio').value) 

area = largo * ancho
console.log(area)
valor_lote = area * precio
console.log(valor_lote)

if (area < 400 ) {
        console.log('entro al if -400')
        descuentoAplica = 'En esta area no hay descuento'
        valorTotal = valor_lote
} else if (area >= 400 && area < 500) {
        console.log('entro al if 400')
        descuentoAplica = '10%'
        descuento = (valor_lote * 10)/100
        valorTotal = valor_lote - descuento
} else if (area > 500 && area < 1000) {
        console.log('entro al if 500')
        descuentoAplica = '17%'
        descuento = (valor_lote * 17)/100
        valorTotal = valor_lote - descuento
} else {
        console.log('entro al if 1000')
        descuentoAplica = '25%'
        descuento = (valor_lote * 25)/100
        valorTotal = valor_lote - descuento
        console.log('el descuento que aplica es' , descuentoAplica)
    }
    document.getElementById('respuesta').innerHTML = 'El valor del lote es:  ' +valor_lote +  '</br> El descuento que aplica es:  ' + descuentoAplica+ '</br> El valor total es: ' +valorTotal
    // document.getElementById('respuesta').innerHTML = 'El valor del lote es:" +valor_lote+ "El descuento que aplica es:" +descuentoAplica +"El valor total es:" +valorTotal
} 


// if (area < 400 ) {
//     console.log('entro al if -400')
//     descuentoAplica = 'En esta area no hay descuento'
//     valorTotal = valor_lote
// }

// if (area >= 400 && area < 500) {
//     console.log('entro al if 400')
//     descuentoAplica = '10%'
//     descuento = (valor_lote * 10)/100
//     valorTotal = valor_lote - descuento
// }

// if (area > 500 && area < 1000) {
    
//     console.log('entro al if 500')
//     descuentoAplica = '17%'
//     descuento = (valor_lote * 17)/100
//     valorTotal = valor_lote - descuento
// }

// if (area > 1000) {
    
//     console.log('entro al if 1000')
//     descuentoAplica = '25%'
//     descuento = (valor_lote * 25)/100
//     valorTotal = valor_lote - descuento
//     console.log('el descuento que aplica es' , descuentoAplica)
// }

// if (area < 400 ) {
//     console.log('entro al if -400')
//     descuentoAplica = 'En esta area no hay descuento'
//     valorTotal = valor_lote
// } else if (area >= 400 && area < 500) {
//     console.log('entro al if 400')
//     descuentoAplica = '10%'
//     descuento = (valor_lote * 10)/100
//     valorTotal = valor_lote - descuento
// } else if (area > 500 && area < 1000) {
//     console.log('entro al if 500')
//     descuentoAplica = '17%'
//     descuento = (valor_lote * 17)/100
//     valorTotal = valor_lote - descuento
// } else {
//     console.log('entro al if 1000')
//     descuentoAplica = '25%'
//     descuento = (valor_lote * 25)/100
//     valorTotal = valor_lote - descuento
//     console.log('el descuento que aplica es' , descuentoAplica)
// }


// console.log("El valor del lote es: ", valor_lote, 'El descuento que aplica es: ', descuentoAplica, 'El valor total es:', valorTotal)

