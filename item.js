var tag = document.getElementsByClassName("add");
var tar = document.getElementsByClassName("cartItems");
var cart= new Array();
var d=["item","price","count"];
cart.push(d);
var count=1;
var iter=0;
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
                false;
                break
            }
    }
    if(check){
        console.log("already exist");
        cart[index][2]+=1;
    }else{
        cart.push(newrow);
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
