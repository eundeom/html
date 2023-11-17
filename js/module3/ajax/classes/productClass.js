class product {
  constructor(id, pname, price, amount) {
    // key값 할당
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.amount = amount;
  }
  total() {
    return Number.parseFloat(this.price * this.amount).toFixed(2);
  }
}
export default product;
