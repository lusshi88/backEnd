const products = [];

class ProductManager {
    constructor() {
        this.autoId = Object.keys(products).length + 1;

    }

    addProduct(title, description, price, thumbnail, stock, code) {
        if (stock <= 0 || typeof stock !== "number") {
            console.log("ingrese una cantidad valida");

        }


        let thisItem = {}

        thisItem.id = this.autoId
        thisItem.title = title;
        thisItem.description = description;
        thisItem.price = price;
        thisItem.thumbnail = thumbnail;
        thisItem.stock = stock;
        thisItem.code = code;

        products[this.autoId] = thisItem;
    }

    getProducts() {
        if (this.autoId > 1) {
            return products
        } else {
            console.log("no hay productos ");
            return ''
        }
    }


}

const peugeot206 = new ProductManager();
peugeot206.addProduct("peugeot 206", "3 puertas,color rojo", 400000, "peugeot206.jpg", 10, "peugeot1234")

const fiatUno = new ProductManager();
peugeot206.addProduct("fiat uno", "4 puertas,color azul", 200000, "fiatuno.jpg", 10, "fiat1234")
