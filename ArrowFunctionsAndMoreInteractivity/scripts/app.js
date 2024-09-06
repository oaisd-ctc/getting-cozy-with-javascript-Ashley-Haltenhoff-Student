const shapeBox = document.getElementById('shape-box');
const selectBox = document.getElementById('select-box');

selectBox.addEventListener('change', () => {
    shapeBox.removeAttribute("class");
    if (selectBox.value == 'circle') {
        shapeBox.classList.add('circle');
    }
    else if (selectBox.value == 'triangle') {
        shapeBox.classList.add('triangle');
    }
    else if (selectBox.value == 'square') {
        shapeBox.classList.add('square');
    }
})