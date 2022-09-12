let btn = document.getElementsByTagName("li");
let ts=document.getElementById("ts");
console.log(ts.innerHTML);
let cv= document.getElementById("cv");
let ncv = parseInt(cv.innerHTML)
console.log(cv.innerHTML)
let nts =  Number(ts.innerHTML);
console.log(nts)
for(let i=0;i<btn.length;i++){
 
  // if(ts.innerHTML>=101){
  //   alert("Game Over");
  //   alert("Computer Win;");
  //   break;
    
  // }
  // console.log(ts.innerHTML);
  function bhupen()
    {
      if(ts.innerHTML==100){
        alert("Computer Win;");
        return alert("Game Over");
        // alert("Computer Win;");
        
      }
      let ni = parseInt(btn[i].innerHTML)
      ncv = 11-ni;
      // console.log(ncv);
      // console.log(ni)
       nts+=ni+ncv;
       ts.innerHTML=nts
      alert("Computer Value :- "+ncv);
      cv.innerHTML=ncv
      console.log(ts.innerHTML);
      
     
      
   }
  
    btn[i].addEventListener("click",bhupen)

   
  
}  
