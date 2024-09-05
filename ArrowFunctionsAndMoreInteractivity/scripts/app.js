const shapeBox = document.getElementById('shape-box');
const selectBox = document.getElementById('select-box');

selectBox.addEventListener('select', () => {
    if (selectBox.value == 'circle') {
        shapeBox.background = red;
    }
})