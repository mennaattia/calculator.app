wow = new WOW(
    {
    boxClass:     'animate__animated',      // new default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();
$("#delBtn").fitText(.3);
$("#resetBtn").fitText(.7);
$(".mainBG .row .answer").fitText();
$(document).ready(function(){
    $(themeBtns[0]).click(function(){
        $(cssLink).attr("href", "main.css");
        window.localStorage.setItem("Theme", "main.css");
    });
    $(themeBtns[1]).click(function(){
        $(cssLink).attr("href", "assests/themes/css light/main.css");
        window.localStorage.setItem("Theme", "assests/themes/css light/main.css");
    });
    $(themeBtns[2]).click(function(){
        $(cssLink).attr("href", "assests/themes/css purple/main.css");
        window.localStorage.setItem("Theme", "assests/themes/css purple/main.css");
    });
});
let themeBtns = document.querySelectorAll(".themes"),
    cssLink = document.querySelector(".cssLink");
let checkThemeFunction = () => {
    let localStorageTheme = localStorage.getItem("Theme");
    if(localStorageTheme !== null && localStorageTheme === "main.css") {
        cssLink.href = localStorageTheme;
    } else if(localStorageTheme !== null && localStorageTheme === "assests/themes/css light/main.css") {
        cssLink.href = localStorageTheme;
    } else if(localStorageTheme !== null && localStorageTheme === "assests/themes/css purple/main.css") {
        cssLink.href = localStorageTheme;
    } 
}
window.onload = checkThemeFunction();
let displayScreen = document.querySelector(".mainBG .row .answer input")
    pn = document.querySelectorAll(".pn"),
    operations = document.querySelectorAll(".operation"),
    delBtn = document.querySelector("#delBtn"),
    resetBtn = document.querySelector("#resetBtn"),
    submitBtn = document.getElementById("submitBtn");
pn.forEach(pnumber => {
    pnumber.addEventListener("click", (e)=>{
        displayScreen.value += e.target.innerText;
    })
});
operations.forEach(onumber => {
    onumber.addEventListener("click", (p)=>{
        displayScreen.value += p.target.value;
    })
});
let result = () => {
   try {
    displayScreen.value = eval(displayScreen.value)
   } catch (error) {
    alert("✔️ Kindly check your data!");
   }
}
submitBtn.addEventListener("click", result);
$(document).ready(function(){
    $(resetBtn).click(function(){
        displayScreen.value = "";
    });
    $(delBtn).click(function(){
        displayScreen.value = displayScreen.value.slice(0, -1);
    });
});