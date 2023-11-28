class Product {
  constructor(pid, pname, price) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
  }

  // make row function    :     return tr;
  // 1. tr 만들기 2. 각 array 마다 value를 td에 넣기 (td 생성 - .text(value) - tr.append(td))
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass("table-primary");
    // this : 각 row의 정보 - Product {}
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
