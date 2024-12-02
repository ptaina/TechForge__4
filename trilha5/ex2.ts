abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;

    abstract removeItem(item: string): void;

    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {}; 

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity; 
        } else {
            this.inventory[item] = quantity; 
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item]; 
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {}; 
    private maxQuantityPerItem: number = 10;

    addItem(item: string, quantity: number): void {
        if (quantity > this.maxQuantityPerItem) {
            console.log(`Não é possível adicionar mais de ${this.maxQuantityPerItem} unidades de ${item}.`);
            return;
        }

        if (this.inventory[item]) {
            if (this.inventory[item] + quantity <= this.maxQuantityPerItem) {
                this.inventory[item] += quantity; 
            } else {
                console.log(`Não é possível adicionar ${quantity} unidades de ${item}, o limite é ${this.maxQuantityPerItem}.`);
            }
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item]; 
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Caixa", 50); 
warehouse.addItem("Mesa", 30); 
warehouse.addItem("Caixa", 20); 
warehouse.removeItem("Mesa");

const store = new StoreInventory();
store.addItem("Camiseta", 5);
store.addItem("Camiseta", 6); 
store.addItem("Boné", 3); 
store.removeItem("Camiseta");

console.log("Inventário do Armazém:");
console.log(warehouse.getInventory());

console.log("Inventário da Loja:");
console.log(store.getInventory());