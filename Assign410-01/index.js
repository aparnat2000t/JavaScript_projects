const searchBox = document.getElementById("searchBox");
// const searchButton = document.getElementById("searchButton")
const profilecontainer = document.getElementById("profilecontainer")
console.log(searchBox,searchButton,profilecontainer);


async function func(){
    const searchvalue = searchBox.value
    
    const response = await fetch(`https://api.github.com/search/users?q=${searchvalue}`);
    console.log(response);

    const data  = await response.json()
    console.log(data.items);
     
    data.items.map((ele)=>{
         const Username = ele.login;
         const Avatar = ele.avatar_url;
         const profile = ele.html_url
         console.log(Username,Avatar,profile);
         profilecontainer.innerHTML +=`
            <div class = "innerDiv">
                <img src = "${Avatar}">
                <div>
                    <h3>${Username}</h3>
                    <a href="${profile}">View Profile</a>  
                </div>                
    
            </div>
         ` 


    })

}
    
function clearFunc(){
    profilecontainer.innerHTML  = ""
}