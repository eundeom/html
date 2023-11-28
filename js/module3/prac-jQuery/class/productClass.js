class Product {
  constructor(pid, pname, price) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
  }
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass("table-primary");

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
