class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayInfo() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, warrantyYears) {
    super(name, price);
    this.warrantyYears = warrantyYears;
  }
  displayInfo() {
    console.log(
      `${this.name} costs $${this.price} and has a ${this.warrantyYears}-year warranty.`
    );
  }
}

class FoodProduct extends Product {
  constructor(name, price, store) {
    super(name, price);
    this.store = store;
  }
  displayInfo() {
    console.log(
      `${this.name} costs $${this.price} and i bought it at ${this.store} store.`
    );
  }
}

const phone = new ElectronicProduct("iPhone", 999, 1);
phone.displayInfo();
const food = new FoodProduct("chocolate", 3, "shoppers");
food.displayInfo();
