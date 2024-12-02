class Cart {
    private items: { name: string, price: number }[] = [];
    
    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    getItems(): { name: string, price: number }[] {
        return this.items;
    }

    calculateTotalPrice(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class Payment {
    private status: string = "Pendente";
    
    processPayment(amount: number): string {
        if (amount > 0) {
            this.status = "Pago";
            return "Pagamento processado com sucesso";
        }
        return "Não é possível processar o pagamento.";
    }

    getStatus(): string {
        return this.status;
    }
}

class Shipping {
    private status: string = "Pendente";
    
    updateStatus(status: string): void {
        this.status = status;
    }

    getStatus(): string {
        return this.status;
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(name: string, price: number): void {
        this.cart.addItem(name, price);
    }

    processPayment(): void {
        const totalPrice = this.cart.calculateTotalPrice();
        const paymentStatus = this.payment.processPayment(totalPrice);
        console.log(paymentStatus);
    }

    updateShippingStatus(status: string): void {
        this.shipping.updateStatus(status);
        console.log(`Status de envio: ${status}`);
    }

    getOrderDetails(): void {
        console.log("Itens do Pedido:", this.cart.getItems());
        console.log("Preço Total:", this.cart.calculateTotalPrice());
        console.log("Status do Pagamento:", this.payment.getStatus());
        console.log("Status do Envio:", this.shipping.getStatus());
    }
}

const order = new Order();
order.addItem("Produto 1", 100);
order.addItem("Produto 2", 150);
order.processPayment();
order.updateShippingStatus("Em Trânsito");
order.getOrderDetails();