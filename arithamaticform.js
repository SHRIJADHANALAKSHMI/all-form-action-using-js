let form=document.getElementById("userform");
let addbtw=document.getElementById("addBtn");
addbtw.addEventListener("click",(event)=>{
    event.preventDefault();
    let sum=0;
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    sum=num1+num2;
    document.getElementById("result").textContent="The sum is: "+sum;
});
let subbtw=document.getElementById("subBtn");
subbtw.addEventListener("click",(event)=>{
    event.preventDefault();
    let diff=0;
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    diff=num1-num2;
    document.getElementById("result").textContent="The difference is: "+diff;
});
let mulbtw=document.getElementById("multiplyBtn");
mulbtw.addEventListener("click",(event)=>{
    event.preventDefault();
    let product=0;
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    product=num1*num2;
    document.getElementById("result").textContent="The product is: "+product;
});
let divbtw=document.getElementById("divideBtn");
divbtw.addEventListener("click",(event)=>{
    event.preventDefault();
    let quotient=0;
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    if(num2!==0){
        quotient=num1/num2;
        document.getElementById("result").textContent="The quotient is: "+quotient;
    }else{
        document.getElementById("result").textContent="Error: Division by zero is not allowed.";
    }
});