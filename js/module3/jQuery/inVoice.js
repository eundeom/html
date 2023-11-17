class Product {
  constructor(id, pname, price, amount) {
    super(id, pname, price);
    this.amount = amount;
  }
  total(newAmount) {
    this.amount();
    return super.price * this.price;
  }
  toRow() {
    console.log(this);
    const tr = $("<tr></tr>");
    tr.addClass(".active");
    $.each(this, (key, value) => {
      if (key != "amount") {
        let td = $("<td></td>");
        td.text(value);
        tr.append(td);
      }
    });
    return tr;
  }
}
export default Product;
