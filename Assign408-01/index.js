let count=0;
let cards=[];
function addPlayer() {
    let FirstName=document.getElementById('FirstName').value.toUpperCase();
    let LastName=document.getElementById('LastName').value.toUpperCase();
    let country=document.getElementById('country').value.toUpperCase();
    let score=document.getElementById('score').value;
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDay();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    
   let cardData= {
        name:`${FirstName} ${LastName}`,
        country:`${country}`,
        rating:`${score}`
     }
     cards.push(cardData)
    
   if(FirstName.length>1 && LastName.length>1 && country.length>1 && score!=""){
    let card=document.getElementById('outerCard')
    card.innerHTML+=`<div class="card" id="card${count}">
<div class="firstname"><div class="name">${FirstName} ${LastName}</div> <div class="date">${day} ${monthNames[month]} ${year}</div></div>
    <div class="Country">${country}</div>
    <div class="rating" id="rating${count}">${score}</div>
    <div class="buttons">
        <button  id="dlt" onclick="dltBtn(${count})">X</button>
        <button onclick="addFive(${count})">+5</button>
        <button onclick="removeFive(${count})">-5</button>
</div>`
   }
   else{
    alert('fill all input feilds:)')
   }


count++;
}

function dltBtn(count){
    let dltbtn=document.getElementById(`card${count}`)
    console.log(dltbtn);
    dltbtn.remove();
}

function addFive(count){
    let rating=document.getElementById(`rating${count}`)

    rating.innerText=Number(rating.innerText)+5;

}
function removeFive(count){
    let rating=document.getElementById(`rating${count}`)
    if(Number(rating.innerText)>=5){
        rating.innerText=Number(rating.innerText)-5;
    }
    else{
        rating.innerText="0";
    }
    
    
}