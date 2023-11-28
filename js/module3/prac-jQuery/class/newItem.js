class Item {
  constructor(pid, pname, price, amount = 1) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
    this.amount = amount;
  }
  toRow() {
    const tr = $("<tr></tr>");

    $.each(this, (idx, value) => {
      const td = $("<td></td>");
      td.text(value);
      tr.append(td);
    });
    return tr;
  }
}
export default Item;
