const products = [];

class ProductManager {
    constructor() {
        this.autoId = Object.keys(products).length + 1;

    }

    addProduct(title, description, price, thumbnail, stock, code) {
        if (stock <= 0 || typeof stock !== "number") {
            console.log("ingrese una cantidad valida");

        }


        let item = {}

        item.id = this.autoId
        item.title = title;
        item.description = description;
        item.price = price;
        item.thumbnail = thumbnail;
        item.stock = stock;
        item.code = code;

        products[this.autoId] = item;
    }

    getProducts() {
        if (this.autoId > 1) {
            return products
        } else {
            console.log("no hay productos ");
            return ''
        }
    }

    getProductById(id = null) {
        if (products[id] === undefined) {
            console.log(`No existe un producto con el codigo ${id}`);
            return '';
        } else {
            return products[id];
        }
    }


}

const peugeot206 = new ProductManager();
peugeot206.addProduct("peugeot 206", "3 puertas,color rojo", 400000, "peugeot206.jpg", 10, "peugeot1234")

const fiatUno = new ProductManager();
peugeot206.addProduct("fiat uno", "4 puertas,color azul", 200000, "fiatuno.jpg", 10, "fiat1234")

const LosProductos = new ProductManager();
// console.log(LosProductos.getProducts());
console.log(LosProductos.getProductById(1));