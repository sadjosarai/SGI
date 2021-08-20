var tag = document.getElementsByClassName("add");
var tar = document.getElementsByClassName("cartItems");
function add(e) {
    var i = e.rowIndex;
    console.log(i);
    var item = e.cells[0].innerHTML;
    var price = e.cells[1].innerHTML;
    tar.innerHTML = tar.innerHTML+"<tr><td>" + item + "</td><td>" + price + "</td></tr>";
    console.log(item);
    console.log(price);
}
