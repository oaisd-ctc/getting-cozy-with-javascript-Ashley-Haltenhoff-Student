const selectBox = document.getElementById('select-box');
const text = document.getElementById('text');

selectBox.addEventListener('change', () => {
    text.removeAttribute("class");

    if (selectBox.value == "") {}
    
    else if (selectBox.value == 'Red') {
        text.classList.add('red');
    }

    else if (selectBox.value == 'Green') {
        text.classList.add('green');
    }

    else if (selectBox.value == 'Blue') {
        text.classList.add('blue');
    }
})