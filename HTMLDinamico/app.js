class producto{
    constructor(id,name,price,imageURL){
        this.id = (id)?id:null
        this.name =(name)?name:''
        this.price = (price)?price:0
        this.imageURL = (imageURL)?imageURL:null
    }
}
const productos = [
    new producto(1,'Producto 1',100,'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
    new producto(2,'Producto 2',100,'https://images.unsplash.com/photo-1650205952937-aad48157c253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'),
    new producto(3,'Producto 3',100,'https://images.unsplash.com/photo-1650205993253-20d1dc32700d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'),
    new producto(4,'Producto 4',100,'https://images.unsplash.com/photo-1650170496553-eac06b780303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
]

let divMain = document.getElementById('divMain')
let texto = ''
productos.map(element =>{
    texto += `<P>Producto:${element.id} foto:<img id='img${element.id}' src='${element.imageURL}' alt='' width="200"  height="250"></img> </p>`
})
divMain.innerHTML = texto