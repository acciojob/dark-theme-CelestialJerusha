//your code here
var btn = document.getElementById("swap");


btn.addEventListener("click",swap);

function swap(){
    var div = document.getElementById("app");
    div.classList.add("night");
    btn.classList.add("button_night");

}
