const submitBtn = document.getElementById('btn-submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');

submitBtn.addEventListener('click', function(event) {
    let canSubmit = true;
    
    if (username.value.length <= 3) {
        document.getElementById('username-error').classList.remove('invisible');
        canSubmit = false;
    }

    if (age.value < 10 && age.value > 100) {
        document.getElementById('age-error').classList.remove('invisible');
    }
})