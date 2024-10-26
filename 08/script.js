const  button = document.getElementById("clickButton");
// const uname = document.getElementById("username");


// button.addEventListener('click',()=>{
//     const value = uname.value;
//     localStorage.setItem('name',value);
    
// })


//location fetch
button.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(getLocation,getError);
});

function getLocation(position){
    console.log(position);
}

function getError(){
    console.log("There is error for fetching user location");
}