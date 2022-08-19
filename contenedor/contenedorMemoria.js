class contenedorMemoria {
    id = 0
    constructor() {
        this.products = [];
    }
    getAll(){
        return this.products;
    };
    getById(id){
        let object = this.products.filter(prod => prod.id == Number(id))
        return object
    };
    addOne(obj){
        obj.id = this.id++
        this.products=[...this.products,obj]
    };
    update(id, obj){
        this.products.forEach(p=>{
            if(p.id==Number(id)){
                p=obj
            }
        })
        return this.products;
    };
    deleteById(id, obj){
        let object = this.products.filter(prod => prod.id != Number(id))
        this.products = object
        return object
    }
}

module.exports = contenedorMemoria