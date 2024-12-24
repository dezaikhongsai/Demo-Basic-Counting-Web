const a = document.getElementById("Btndecrease");
const b = document.getElementById("Btnreset");
const c = document.getElementById("Btnincrease");

const countingLabel = document.getElementById("CountingLable");
let cnt  = 0 ;

a.onclick = function(){
    cnt--;
    countingLabel.textContent = cnt;
}
b.onclick = function(){
    cnt = 0;
    countingLabel.textContent = 0;
}
c.onclick = function(){
    cnt++
    countingLabel.textContent = cnt;
}

