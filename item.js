var tag = document.getElementsByClassName("add");
var tar = document.getElementById("cartTable");
var cart= new Array();
var d=["item","price"];
cart.push(d);
var count=1;
var iter = 0;
function more(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    var ele =tar.rows[r].cells[1].innerHTML;
    var k=parseInt(ele, 10)+1;
    tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
    var lastRowIndex=tar.rows.length - 1;
    var total = parseInt(tar.rows[lastRowIndex].cells[1].innerHTML,10);
    var prix = parseInt(cart[cart.length - r][1], 10);
    var t=total + prix;
    tar.rows[lastRowIndex].cells[1].innerHTML = t+"$";
}
function less(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    console.log("this is row index : "+r);
    var ele =tar.rows[r].cells[1].innerHTML;
    var k=parseInt(ele, 10)-1;
    if(k==0){
        tar.deleteRow(r);
        var lastRowIndex=tar.rows.length - 1;
        var total = parseInt(tar.rows[lastRowIndex].cells[1].innerHTML,10);
        var prix = parseInt(cart[cart.length - r][1], 10);
        var t=total - prix;
        tar.rows[lastRowIndex].cells[1].innerHTML = t+"$";
        cart.splice(cart.length-r,1);
    }else{
        console.log("this is k : "+k);
        tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
        var lastRowIndex=tar.rows.length - 1;
        var total = parseInt(tar.rows[lastRowIndex].cells[1].innerHTML,10);
        var prix = parseInt(cart[cart.length - r][1], 10);
        var t=total - prix;
        tar.rows[lastRowIndex].cells[1].innerHTML = t+"$";
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
        var lastRowIndex=tar.rows.length - 1;
        var total = parseInt(tar.rows[lastRowIndex].cells[1].innerHTML,10);
        var prix = parseInt(cart[cart.length - 1][1], 10);
        var t=total + prix;
        tar.rows[lastRowIndex].cells[1].innerHTML = t+"$";
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
