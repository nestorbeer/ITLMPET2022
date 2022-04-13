function Grabar(idTextBox){
    const texto = document.getElementById(idTextBox).value
    const stock = 100
    let mensaje = ''
    if(!isNaN(texto) && texto !='' ){
        const cantidad = parseInt(texto)

        if(cantidad > stock){
            mensaje = 'La cantidad supera al stock'
        }
        else if(cantidad < stock){
            mensaje = 'La cantidad es menor al stock'
        }
        else if(cantidad === stock){
            mensaje = 'La cantidad es igual al stock'
        }
    }
    else{
        mensaje = 'El texto ingresado no es un numero'
    }
    alert(mensaje)
    
}

function IfTernario(){
    const texto = document.getElementById(idTextBox).value
    const cantidad = parseInt(texto)
    const stock = 100
    const mensaje = (isNaN(texto))?'El valor no es un numero':(texto==='')?'El texto esta vacio':(cantidad > stock)?'La cantidad supera al stock':(cantidad < stock)?'cantidad menor al stock':'la cantidad es igual'
    alert(mensaje)
    //variable = (condicion)?valor que devuelve en true:valor que devuelve en false
}

function GrabarSwitch(idTextBox){
    const texto = document.getElementById(idTextBox).value
    let mensaje = ''
    
    //0=vacio, 1=menor, 2 = igual, 3=mayor, 4=NaN
    const resultado = resolverTexto(texto)    
    
    //Este es el eje que tienen que hacer
    switch (resultado) {
        case 0:
            mensaje = 'El texto esta vacio'        
            break;
        case 1:
            mensaje = 'Cantidad menor'        
            break;
        case 2:
            mensaje = 'Cantidad igual'        
            break;
        case 3:
            mensaje = 'Cantidad mayor'        
            break;
        case 4:
            mensaje = 'No es un numero'        
            break;
        default:
            break;
    }
    alert(mensaje)
}

function resolverTexto(texto){
    const cantidad = parseInt(texto)
    const stock = 100
    const resultado = (isNaN(texto))?4:(texto==='')?0:(cantidad > stock)?3:(cantidad < stock)?1:2
    return resultado
}

