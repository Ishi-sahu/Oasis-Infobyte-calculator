let buttons=document.querySelectorAll("button");
let solve=document.querySelector(".solve");
let input= document.querySelector("input");
let sum="";
for(but of buttons){
    but.addEventListener("click",(info)=>{
 if(info.target.innerHTML==  "="){
    sum = eval(sum);
   
 }
 else if(info.target.innerHTML==  "AC"){
    sum=" ";
 }
 else if(info.target.innerHTML==  "clear"){
    sum=sum.slice(0,-1);
 }
 
 else{
    sum=sum + info.target.innerHTML;
  
 }
 input.value=sum;
  console.log(info.target.innerHTML);
    })
}