let count = 0;

document.getElementById("DecreaseBtn").onclick = function(){
 count -= 1;
 document.getElementById("CountDown").innerHTML = count;
}
document.getElementById("ResetBtn").onclick = function(){
    count = 0;
    document.getElementById("CountDown").innerHTML = count;
}
document.getElementById("IncreaseBtn").onclick = function( ){
    count += 1;
    document.getElementById("CountDown").innerHTML = count;
}

