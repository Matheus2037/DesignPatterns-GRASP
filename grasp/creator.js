class OrderItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

class Order {
    constructor() {
        this.items = [];
    }
    
    addProduct(product, quantity) {
        const newItem = new OrderItem(product, quantity);
        this.items.push(newItem);
        console.log(`Item criado e adicionado: ${quantity}x ${product.name}`);
    }
}

const ps5 = { name: "PS5", price: 4000 };
const xbox = { name: "xbox", price: 3900 };
const quantity = 2;

const order = new Order();

order.addProduct(ps5, quantity);
order.addProduct(xbox, 3);