import Product from "./inVoice.js";

class item extends Product {
  constructor(pid, pname, price, amount) {
    super(pid, pname, price);
    this.amount = amount;
  }
  total(newAmount) {
    this.amount = newAmount;
    return super.price * this.amount;
  }
  toRow() {
    let tr = super.toRow();
    let input = $("<input type = 'number'/>");
    input.val(this.amount);
    let td = $("<td></td>");
    td.append(input);
    let totalTd = $("<td></td>");
    td.append(this.total());
    tr.append(td.totalTd);
    return tr;
  }
}
export default item;
