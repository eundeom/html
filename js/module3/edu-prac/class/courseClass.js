class course {
  constructor(cid, cname, fname, lname) {
    this.cid = cid;
    this.cname = cname;
    this.fname = fname;
    this.lname = lname;
    const bt = document.createElement("button");
    bt.innerText = "SELECT";
    bt.type = "button";

    bt.addEventListener("click", (e) => {
      const stid = JSON.parse(sessionStorage.getItem("u")).stid;
      const sc = JSON.parse(localStorage.getItem("sc"));

      function localRefresh(idx, cid, item = null) {}
    });
  }
  toTr() {
    const tr = document.createElement("tr");
    for (let pr of Object.values(this)) {
      const td = document.createElement("td");
      pr instanceof Object ? td.append(pr) : (td.innerText = pr);
      tr.append(td);
    }
    return tr;
  }
}
export default course;
