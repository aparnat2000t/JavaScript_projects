const inputvalue = document.getElementById("inputvalue");
const def = document.getElementById("def")
const audio = document.getElementById("audio");

async function func(){
    const search = inputvalue.value
    console.log(search)
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data = await response.json()
    console.log(data)
    def.innerText = data[0].shortdef[0];
}