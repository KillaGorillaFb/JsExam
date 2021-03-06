const cart = {
    firstName: "Lou",
    lastName: "Tennant",
    cartItems: ["Rubber Duck", "Stitch Erase"],
    itemPrices: [15.95, 1.95],
    printShoppingCart() {
        for (var i = 0; i < this.cartItems.length - 1; i++) {
            console.log(`Name: ${this.firstName} ${this.lastName}
            \rItems Purchased:\n${this.cartItems[0]} $${this.itemPrices[0]} 
            \r${this.cartItems[1]} $${this.itemPrices[1]}`);
        }
        this.calcTotal(this.itemPrices);
    },
    calcTotal(itemPrices) {
        total = itemPrices[0] + itemPrices[1];
        finalTotal = total.toFixed(2);
        console.log(`Total Purchase: $${finalTotal}`);
    }
}
cart.printShoppingCart();