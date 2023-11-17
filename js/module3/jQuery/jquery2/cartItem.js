import Product from "./productClass.js";
class item extends Product {
  constructor(pid, pname, price, amount = 1) {
    super(pid, pname, price);
    this.amount = amount;
  }
  total() {
    // return super.price * this.amount;  // super를 쓰면 문제가 생김.. .생각해보긔
    return (this.price * this.amount).toFixed(2);
  }
  toRow() {
    let tr = super.toRow(); // creating a new tr : because parent method of toRow returns tr
    let input = $("<input type='number' />");
    input.on("change", (e) => {
      this.amount = e.target.value;
      $(e.target).parent().next().text(this.total());
    });
    input.val(this.amount);
    let td = $("<td></td>");
    td.append(input);
    let totalTd = $("<td></td>");
    td.append(this.total());
    tr.append(td, totalTd);
    return tr;
  }
}
export default item;
