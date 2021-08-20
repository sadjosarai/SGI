var tag = document.getElementsByClassName("add");
var tar = document.getElementById("cartTable");
var cart= new Array();
var d=["item","price","count"];
cart.push(d);
var count=1;
var iter=0;
function more(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    console.log(r);
    var ele =tar.rows[r].cells[1].innerHTML;
    console.log(parseInt(ele, 10));
    var k=parseInt(ele, 10)+1;
    console.log("this is k"+k);
    tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
}
function less(e){
    var r = e.parentNode.parentNode.parentNode.rowIndex;
    console.log(r);
    var ele =tar.rows[r].cells[1].innerHTML;
    console.log(parseInt(ele, 10));
    var k=parseInt(ele, 10)-1;
    if(k==0){
        tar.deleteRow(r);
    }else{
        console.log("this is k"+k);
        tar.rows[r].cells[1].innerHTML=k+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
    }
   
}
function add(e) {
    var newrow = new Array();
    var i = e.rowIndex;
    console.log(i);
    var item = e.cells[0].innerHTML;
    var price = e.cells[1].innerHTML;
    var check=false;
    newrow[0]=item;
    newrow[1]=price;
    newrow[2]=count;
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
        cart[index][2]+=1;
        
    }else{
        cart.push(newrow);
        var row = tar.insertRow(1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        cell1.innerHTML=e.cells[0].innerHTML;
        cell2.innerHTML=1+"<div class='arrow'><i class=\"fas fa-angle-up\" onclick=\"more(this)\"></i><i class=\"fas fa-angle-down\" onclick=\"less(this)\"></i></div>";
    }
    
    function fill(tab){
        var el=document.getElementsByClassName("total");
        for(i=0;i<tab.length;i++){
            for(j=0;j<tab[i].length;j++){
                let price=parseInt(tab[i][1], 10)*tab[i][2];
                iter+=price;
            }
        }
        console.log(iter);

    }
   
    
   
   /*  console.log(item);
    console.log(price); */
    console.log(cart);
    console.log(cart.length);
}
