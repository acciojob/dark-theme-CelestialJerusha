//your code here
var btn = document.getElementById("swap");


btn.addEventListener("click",swap);

function swap(){
    var main = document.getElementById("app");
    main.className = "night";
    btn.className = "button_night";

}
