document.getElementById("btn-change-color").addEventListener("click", changeColor);

function changeColor() {
    document.getElementById("p3").style.background = document.getElementById("txt-color").value;
}