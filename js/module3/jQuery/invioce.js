class people {
  constructor(id, pname, price, amount) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.amount = amount;
  }
  total() {
    return Number.parseFloat(this.price * this.amount).toFixed(2);
  }
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass(".active");
    $.each(this, (key, value) => {
      let td = $("<td></td>");
      td.text(value);
      tr.append(td);
    });
  }
}
export default people;
