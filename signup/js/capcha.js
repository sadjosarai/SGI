var allvalue = ['A','B','C','B','A','F','A','B','A','B','Q','B','A',
'c','A','B','A','B','x','B','A','y','z','B','1','2','3','4','5','6','7','8','9','0']

var cVal1 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal2 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal3 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal4 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal5 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal6 = allvalue[Math.floor(Math.random()*allvalue.length)];

var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;

capchavalue.innerHTML = cValue; 

thisValue = "";

inputCapcha.addEventListener('change',function(){
    thisValue = inputCapcha.value;
    // alert(thisValue)
})
submitbtn.addEventListener('click', function(){
    if(cValue ==  thisValue){
        alert('Valid');
        document.logForm.submit();
    }else if(inputCapcha.value == ""){
        alert('Invalid Capcha'); 

    }else{
        alert('Invalid Capcha'); 

    }
})

