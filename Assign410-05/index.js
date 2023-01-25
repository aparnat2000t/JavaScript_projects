getData()
       
async function getData(){

let dataEle=document.getElementById('data')



let res=await fetch(`https://api.quotable.io/random`)
let data= await res.json();
console.log(data);

dataEle.innerHTML=`<div class="div"> "${data.content} "</div>
  <div class="div2"> --${data.author}</div>
  <div class="div3">
      <img src="https://logos-world.net/wp-content/uploads/2020/05/Twitter-Logo-2010.png" alt="" height="50px" width="100px">
  <button onclick="getData()">next</button>
  </div>`   
}