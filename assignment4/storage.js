let button = document.getElementById("button");
button.addEventListener("click",localStorageHandler)
button.addEventListener("click",sessionStorageHandler)
if(!localStorage.getItem("localCount"))
    localStorage.setItem("localCount",0);
if(!sessionStorage.getItem("sessionCount"))
    sessionStorage.setItem("sessionCount",0);

let localText = document.getElementById("localcount");
localText.innerHTML = localStorage.getItem("localCount");
let sessionText = document.getElementById("sessioncount");
sessionText.innerHTML = sessionStorage.getItem("sessionCount"); 

function localStorageHandler(){
    let count = localStorage.getItem("localCount");
    console.log(typeof(count));
    count = parseInt(count)+1;
    localStorage.setItem("localCount",count)
    localText.innerHTML = localStorage.getItem("localCount");
}        

function sessionStorageHandler(){
    let count = sessionStorage.getItem("sessionCount");
    count = parseInt(count)+1;
    sessionStorage.setItem("sessionCount",count);
    sessionText.innerHTML = sessionStorage.getItem("sessionCount");
}