let j1 = '' 
let g1 = 0
let e1 = 0
let s1 = ''

let j2 = '' 
let g2 = 0
let e2 = 0
let s2 = ''

let j3 = '' 
let g3 = 0
let e3 = 0
let s3 = ''

let j4 = '' 
let g4 = 0
let e4 = 0
let s4 = ''

let j5 = '' 
let g5 = 0
let e5 = 0
let s5 = ''

let seguir = false
let jugadorMasJoven = ''
let jugadorConMasGoles = ''
let cntTotalHombres = 0
let cntTotalMujeres = 0

function main(){
    ingresoDeDatos()
    if(seguir==true){
        resolverJugadorMasJoven()
        resolverJugadorQueMasGolesMetio()
        resolverCantidadDeGolesPromedio()
        resolverCantidadDeHombresYmujeres()
    }
    else{
        alert('Gracia por venir')
    }
}

function ingresoDeDatos(){
    seguir = true
}

function resolverJugadorMasJoven(){
    let jovenEdad = 9999
    let jovenNombre = ''
    if(e1<jovenEdad){
        jovenEdad = e1
        jovenNombre = j1
    }
    if(e2<jovenEdad){
        jovenEdad = e2
        jovenNombre = j2
    }
    if(e3<jovenEdad){
        jovenEdad = e3
        jovenNombre = j3
    }
    if(e4<jovenEdad){
        jovenEdad = e4
        jovenNombre = j4
    }
    if(e5<jovenEdad){
        jovenEdad = e5
        jovenNombre = j5
    }
}
function resolverJugadorQueMasGolesMetio(){
    let golesMax = 0
    let golesNombre =''
    if(g1>golesMax){
        golesMax = g1
        golesNombre = j1
    }
    if(g2>golesMax){
        golesMax = g2
        golesNombre = j2
    }
    if(g3>golesMax){
        golesMax = g3
        golesNombre = j3
    }
    if(g4>golesMax){
        golesMax = g4
        golesNombre = j4
    }
    if(g5>golesMax){
        golesMax = g5
        golesNombre = j5
    }
    
}
function resolverCantidadDeHombresYmujeres(){
    if(s1 == "M"){
        cntTotalHombres = cntTotalHombres +1
    }
    else{
        cntTotalMujeres = cntTotalMujeres +1
    }
}

function resolverCantidadDeGolesPromedio(){
    let promedio = (g1+g2+g3+g4+g5)/5
}

function ejemploIvan(){
    const jugador=[1,2,3]
    jugador.push(4)
    jugador = [1,3,4]
}
