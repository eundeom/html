class User{
    constructor(empid,fname,lname,uname){
        this.empid = empid;
        this.fname = fname;
        this.lname = lname;
        this.uname = uname;
    }
    toDisplay(){
        let name = $("<h2></h2>");
        name.text(`Employee: ${this.fname} ${this.lname}`);
        return name;
    }
}

export default User;