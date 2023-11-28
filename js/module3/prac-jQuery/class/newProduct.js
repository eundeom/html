class Product {
  constructor(pid, pname, price, amount) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
    this.amount = amount;
  }
  toRow() {
    const tr = $("<tr></tr>");

    $.each(this, (idx, value) => {
      if (idx != "amount") {
        const td = $("<td></td>");
        td.text(value);
        tr.append(td);
      }
    });
    return tr;
  }
}

export default Product;
