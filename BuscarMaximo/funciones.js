function Mostrar(mensaje){
    alert(mensaje)
}

function BuscarMaximo(){
    let num1 = -1
    let num2 = -1
    let num3 = -1
    let maximo = 0
    
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value
    num3 = document.getElementById('num3').value
    
    if(num1 > num2 && num1 > num3){
        maximo = num1
    }
    else{
        if(num2 > num3){
            maximo = num2
        }
        else{
            maximo = num3
        }
    }

    alert(`El maximo es ${maximo}`)
}

function BuscarSegundoMayor(){
    const num1 = 1
    const num2 = 2
    const num3 = 3
    const num4 = 4
    const num5 = 5

    let maximo = 0
    let segundoMaximo = 0

    maximo = num1
    if(num2>maximo){
        segundoMaximo = maximo
        maximo = num2
    }
    if(num3>maximo){
        segundoMaximo = maximo
        maximo = num3
    }
    if(num4>maximo){
        segundoMaximo = maximo
        maximo = num4
    }
    if(num5>maximo){
        segundoMaximo = maximo
        maximo = num5
    }
    if(maximo == num1){
        if(num2>segundoMaximo){
            segundoMaximo = num2
        }
        if(num3>segundoMaximo){
            segundoMaximo = num3
        }
        if(num4>segundoMaximo){
            segundoMaximo = num4
        }
        if(num5>segundoMaximo){
            segundoMaximo = num5
        }
    }
    console.log('El maximo es:', maximo)
    console.log('El Segundo maximo es:', segundoMaximo)
    
}

const BuscarSegundoMayor2=()=>{
    const num1 = 1
    const num2 = 2
    const num3 = 3
    const num4 = 4
    const num5 = 5

    let maximo = 0
    let segundoMaximo = 0
    for (let index = 1; index < 6; index++) {
        console.log('Eval:', eval("num" + index) )
    }
}
BuscarSegundoMayor2()