import Product from "./productClass.js";
class item extends Product{
    constructor(pid,pname,price,amount=1){
        super(pid,pname,price);
        this.amount = amount;
    }
    total(){
        return (this.price * this.amount).toFixed(2);
    }
    toRow(){
        let tr = super.toRow();
        let input = $("<input type='number'/>");
        input.on("change",(e)=>{
            this.amount = e.target.value;
            $(e.target).parent().next().text(this.total());
        })
        input.val(this.amount);
        let td = $("<td></td>");
        td.append(input);
        let totalTd = $("<td></td>");
        totalTd.text(this.total());
        tr.append(td,totalTd);
        return tr;
    }
}

export default item;