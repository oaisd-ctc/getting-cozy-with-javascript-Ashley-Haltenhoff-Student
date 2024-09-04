document.getElementById("btn-hide").addEventListener("click", hideText); 
document.getElementById("btn-show").addEventListener("click", showText); 

function hideText() {
    document.getElementById("p2").style.visibility = "hidden";
}

function showText() {
    document.getElementById("p2").style.visibility = "visible";
}