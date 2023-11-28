class User {
  constructor(empid, fname, lname, uname, total = null) {
    this.empid = empid;
    this.fname = fname;
    this.lname = lname;
    this.uname = uname;
    this.total = total;
  }
  toDisplay() {
    let name = $("<h2></h2>");
    name.text(`Hi ${this.fname} ${this.lname}`);
    return name;
  }
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass("table-primary");

    $.each(this, (key, value) => {
      let td = $("<td></td>");
      td.text(value);
      tr.append(td);
    });
    return tr;
  }
}

export default User;
