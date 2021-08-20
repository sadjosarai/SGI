var tag = document.getElementsByClassName("add");
var tar = document.getElementById("cartTable");
var cart= new Array();
var d=["item","price"];
cart.push(d);
var count=1;
var iter = 0;
function more(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    //console.log(r);
    var ele =tar.rows[r].cells[1].innerHTML;
    //console.log(parseInt(ele, 10));
    var k=parseInt(ele, 10)+1;
    //console.log("this is k : "+k);
    tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
    var lastRowIndex=tar.rows.length - 1;
    var total = parseInt(tar.rows[lastRowIndex].cells[1].innerHTML,10);
    var prix = parseInt(cart[cart.length - r][1], 10);
    tar.rows[lastRowIndex].cells[1].innerHTML = total + prix;
    console.log("this is current total : " + total+" n "+prix+" n "+currentTotal);
}
function less(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    console.log("this is row index : "+r);
    var ele =tar.rows[r].cells[1].innerHTML;
    var k=parseInt(ele, 10)-1;
    if(k==0){
        tar.deleteRow(r);
        console.log("cart avant splice : " + cart);
        cart.splice(cart.length-r,1);
        console.log("cart après splice :" + cart);
    }else{
        console.log("this is k : "+k);
        tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
        currentTotal = total - cart[cart.length - r][1];
    }
}
function add(e) {
    var newrow = new Array();
    var i = e.rowIndex;
    var item = e.cells[0].innerHTML;
    var price = e.cells[1].innerHTML;
    var check=false;
    newrow[0]=item;
    newrow[1]=price;
    for(i=0;i<=cart.length-1;i++){
        for(j=0;j<cart[i].length;j++)
            if(cart[i][j] === newrow[j]){
                check=true;
                var index=i;
            }else{
                var index=i;
                false;
                break
            }
    }
    if(check){
        console.log("already exist");
    }else{
        cart.push(newrow);
        var row = tar.insertRow(1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        cell1.innerHTML=e.cells[0].innerHTML;
        cell2.innerHTML=1+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
    }
    
    function fill(){
        
        for(i=0;i<tab.length;i++){
            for(j=0;j<tab[i].length;j++){
                
                iter+=price;
            }
        }
        console.log(iter);
    }
    console.log(cart);
    console.log("cart length : "+cart.length);
    console.log();
}
