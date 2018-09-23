/*
Developer:  Frankie Barrios 
Date:       9/20/2018
Purpose:    Exam 1: Javascript
*/
const cart = {
    firstName: "Lou",
    lastName: "Tennant",
    cartItems: ["Rubber Duck", "Stitch Erase"],
    itemPrices: [15.95, 1.95],
    printShoppingCart() {
        inCart = 0;
        for (var i = 0; i < this.cartItems.length - 1; i++) {
            inCart += this.cartItems[i];
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