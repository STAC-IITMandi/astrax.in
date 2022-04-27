var  april30=documnet.getElementbyId("april");
var mayone=documnet.getElementbyId("mayone");
var maytwo=documnet.getElementbyId("maytwo");
var maythree=documnet.getElementbyId("maythree");

april30.addEventListener('click',april);
mayone.addEventListener('click',may);
maytwo.addEventListener('click',may2);
maythree.addEventListener('click',may3);


function april(){
    april30.style.display='none';
    mayone.style.display="none";
    maytwo.style.display="none";
    maythree.style.display="none";
}


// let one=document.getElementById("one");
// let two=document.getElementById("two");
// let three=document.getElementById("three");
// let four=document.getElementById("four");
 

function may(){
    april30.style.display='none';
    mayone.style.display="visible";
    maytwo.style.display="none";
    maythree.style.display="none";
}
function may2(){
    april30.style.display='none';
    mayone.style.display="none";
    maytwo.style.display="visible";
    maythree.style.display="none";
}
function may3(){
    april30.style.display='none';
    mayone.style.display="none";
    maytwo.style.display="none";
    maythree.style.display="visible";
}