const box = document.getElementById('move-box');
const buttonLeft = document.getElementById('btn-move-left');
const buttonRight = document.getElementById('btn-move-right');
const buttonCenter = document.getElementById('btn-move-center');

buttonLeft.addEventListener('click', () => {
    box.style.transform = "translateX(-50px)";
})

buttonRight.addEventListener('click', () => {
    box.style.transform = "translateX(50px)";
})


buttonCenter.addEventListener('click', () => {
    box.style.transform = "translateX(0px)";
})