//change text
let textbtn=document.getElementById("textBtn");
textbtn.addEventListener("click",()=>{
    let title=document.getElementById("title");
    title.textContent="Text changed done : hello!";
});
//change color
let colorbtn=document.getElementById("colorBtn");
colorbtn.addEventListener("click",()=>{
    let title=document.getElementById("title");
    title.style.color="blue";
});
let nameinput=document.getElementById("nameInput");
nameinput.addEventListener("input",()=>{
    let title=document.getElementById("title");
    title.textContent="Hello, "+nameinput.value+"!";
}); 

let addpara=document.getElementById("addBtn");
addpara.addEventListener("click",()=>{
    let paragraphContainer=document.getElementById("paragraphContainer");
    paragraphContainer.innerHTML="<p>this is the para that i have newly added</p>";
    
});
let removetxt=document.getElementById("removeBtn");
removetxt.addEventListener("click",()=>{
    let paragraphContainer=document.getElementById("paragraphContainer");
    paragraphContainer.innerHTML="";
});

