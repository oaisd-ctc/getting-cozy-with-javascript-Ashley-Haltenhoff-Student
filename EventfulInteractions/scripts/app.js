document.getElementById("btn-change-color").addEventListener("click", changeColor);

function changeColor() {
    document.getElementById("p3").style.color = document.getElementById("txt-color").value;
}