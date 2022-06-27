class Cliente {
    constructor(id, name){
        this.id = id
        this.name = name
    } 
}

class Producto{
    constructor(id, name, price, proveedor){
        this.id = id
        this.name = name
        this.price = price
        this.proveedor = proveedor
    }
}

class Proveedor{
    constructor(id,name){
        this.id = id
        this.name = name
    }
}
let proveedor =  new Proveedor(1,'Alberto')
let producto = new Producto(1,'Remera',400,proveedor)
let cliente = new Cliente(1,"Nestor")

/*
CRUD 
Create Read Update Delete
Post
URL/API/Productos/1
Get
URL/API/Productos/1
Put
URL/API/Productos/1
Delete
URL/API/Productos/1

GitHub

Clone para trabajarlo local en su maquina contra el repo en la nube
Add pongo los archivos disponibles al repositorio para que sean versionados
Commit sube los cambios al repositorio local
Push sube los cambios que esten commitiados a la nube
Status te da el status de como esta el repositorio
Fetch verificar si hay algo disponible para bajar
Pull baja, actualiza.
Merge si hay conflictos decidis que codigo es el que queda definitivo
Stage guardar en un repo local los cambios provisorios hasta que hagas el pull y el nuevo merge
.gitignore los archivos que queres excluir del versionado

Branch, ramas.

*/