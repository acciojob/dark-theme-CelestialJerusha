//your code here
var btn = document.getElementById("swap");


btn.addEventListener("click",swap);

function swap(){
    var div = document.getElementById("app");
    div.className = "night";
    btn.className = "button_night";

}
