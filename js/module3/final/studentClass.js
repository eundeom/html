class Student {
  constructor(sid, fname, lname, grade) {
    this.sid = sid;
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
  }
  toRow() {
    const tr = $("<tr></tr>");

    $.each(this, (idx, value) => {
      if (!(idx == "lname")) {
        const td = $("<td></td>");
        td.text(value);
        tr.append(td);
      }
    });
    return tr;
  }
  toDisplayAvg(avg) {
    let avgDisplay = $("<h1></h1>");
    avgDisplay.text("Average : " + avg);
    return avgDisplay;
  }
  //   toDisplay() {
  //     let name = $("<h2></h2>");
  //     name.text(`Hi ${this.fname} ${this.lname}`);
  //     return name;
  //   }
}

export default Student;
