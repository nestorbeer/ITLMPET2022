const productos = [{id:1, name:"producto 1", price:100},{id:2, name:"producto 2", price:150},{id:3, name:"producto 3", price:500},{id:4, name:"producto 4", price:1000}]

function recorrerProductosConFor(){
    let total = 0
    for (let index = 0; index < 4; index++) {
        console.log('Index',index)
        console.log('Productos',productos[index].id, productos[index].name)
        total = total + productos[index].price
    }
    console.log(`El total es ${total}`)
}

function recorrerProductosConForEach(){
    let total = 0
    productos.forEach((product, index) => {
        total = total + product.price
        console.log('Index',index)
        console.log('Productos',product.id, product.name, product.price)
    });
    console.log(`El total es ${total}`)
}

function recorrerConMap(){
    let productosAux = []
    productosAux = productos.map((product) =>{
        console.log('Productos',product.id, product.name, product.price)
        if(product.price > 100){
            return product
        }
        return {}
    })
    console.table('Productos', productos)
    console.table('productosAux', productosAux)
}

function recorrerConReduce(){
    const productosAux = [1,2,3,4]
    let total = 0
    total = productosAux.reduce((acc,item)=>{
        return acc = acc + item
    },0)
    console.log(total)
}

function recorrerConFilter(){
    let productsAux = productos.filter(product => product.price > 100)
    console.table(productsAux)
}

function recorrerProductosConWhile(){
    const productosOriginal = [1]
    const productosAux = []
    let cantidadDeElemntos = 0

    console.log('Antes de entrar al ciclo')
    while (cantidadDeElemntos > 0) {
        console.log('Entre al ciclo')
        productosAux.push(productosOriginal[0])
        cantidadDeElemntos = cantidadDeElemntos -1
    }
    console.log('Sali del ciclo')
    console.table('productosAux', productosAux)
    console.table('productosOriginal',productosOriginal)
}

function recorrerProductosConDoWhile(){
    const productosOriginal = [1]
    const productosAux = []
    console.log('Antes de entrar al ciclo')
    let cantidadDeElemntos = 0

    do {
        console.log('Entre al ciclo')
        productosAux.push(productosOriginal[0])
        cantidadDeElemntos = cantidadDeElemntos -1
    } while (cantidadDeElemntos > 0);

    console.log('Sali del ciclo')
    console.table('productosAux', productosAux)
    console.table('productosOriginal',productosOriginal)
}