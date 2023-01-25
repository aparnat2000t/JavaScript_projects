let table=document.getElementById('table');
// hello2()
function getData(){
table.innerHTML="";

let bar= document.getElementById('bar').value;
// console.log(bar);
let emojiArray=[];
emojiList.map((e)=>{
e.tags.map((el)=>{
if(el.startsWith(bar))
{

    emojiArray.push(e)
}

}) 

})
emojiArray.map((ele)=>{
table.innerHTML+=`<tr>
<td>${ele.emoji}</td>
<td id="tdm">${ele.aliases}</td>
<td>${ele.description}</td>
</tr>`


})

}
function hello2(){

table.innerHTML="";

let bar= document.getElementById('bar').value;
// console.log(bar);
let emojiArray=[];
emojiList.map((e)=>{
e.tags.map((el)=>{
if(el.startsWith(bar))
{

    emojiArray.push(e)
}

}) 

})
emojiArray.map((ele)=>{
table.innerHTML+=`<tr>
<td>${ele.emoji}</td>
<td>${ele.aliases}</td>
<td>${ele.description}</td>
</tr>`


})

}