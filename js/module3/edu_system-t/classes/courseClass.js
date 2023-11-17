class course {
  constructor(cid, cname, fname, lname) {
    this.cid = cid;
    this.cname = cname;
    this.fname = fname;
    this.lname = lname;
    const bt = document.createElement("button");
    bt.innerText = "SELECT";
    bt.type = "button";
    // select button 누르면
    bt.addEventListener("click", (e) => {
      const stid = JSON.parse(sessionStorage.getItem("u")).stid;
      const sc = JSON.parse(localStorage.getItem("sc"));
      let flag = false;

      function localRefresh(idx, cid, item = null) {
        if (item != null) {
          // console.log(Object.values(stItem)[0]);
          Object.values(item)[0].push(cid);
          sc[idx] = item;
        } else {
          const scObj = {
            [stid]: [cid],
          };
          sc.push(scObj);
        }
        localStorage.setItem("sc", JSON.stringify(sc));
        e.target.parentElement.parentElement.style.display = "none";
      }

      for (let idx in sc) {
        if (Object.keys(sc[idx])[0] == stid) {
          if (Object.values(sc[idx])[0].indexOf(this.cid) == -1) {
            localRefresh(idx, this.cid, sc[idx]);
          } else {
            alert("You've already selected this course!!!!!!!!!");
          }
          flag = true;
          break;
        }
      }
      if (!flag) localRefresh(0, this.cid);
    });
    this.selectBt = bt;
  }

  toTr() {
    const tr = document.createElement("tr");
    // 테이블 만드는 고 각 object 마다 td를 담고 tr에 넣음
    // Object.values(this) = cid부터 button
    for (let pr of Object.values(this)) {
      const td = document.createElement("td");
      // pr type이 object이면 td에 바로 pr을 넣기, object가 아니면 string을 innerText하기
      pr instanceof Object ? td.append(pr) : (td.innerText = pr);
      // tr에 append하기
      tr.append(td);
    }
    return tr;
  }
}
export default course;
