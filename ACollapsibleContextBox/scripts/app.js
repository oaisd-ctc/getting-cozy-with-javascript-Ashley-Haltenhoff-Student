const toggleBtn = document.getElementById('btn-toggle');
const contentBox = document.getElementById('content');

toggleBtn.addEventListener('click', () => {
    contentBox.classList.toggle('invisible')
})