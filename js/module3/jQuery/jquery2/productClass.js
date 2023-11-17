class Product {
  constructor(id, pname, price, amount) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.amount = amount;
    this.total = price * amount;
  }
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass("table-primary"); //add bootstrap class
    $.each(this, (key, value) => {
      // 클릭시 amount가 있으면 안되는데 있는..?
      if (key != "amount") {
        let td = $("<td></td>");
        td.text(value);
        tr.append(td);
      }
    });

    // tr.on("click", (e) => {
    //   // console.log(e.target); // if click the item, it returns td not tr but it should be tr(entire row)
    //   // console.log(Object.values(this)); // returns entire row in array object
    //   return Object.values(this)
    // })

    return tr;
  }
}
export default Product;
