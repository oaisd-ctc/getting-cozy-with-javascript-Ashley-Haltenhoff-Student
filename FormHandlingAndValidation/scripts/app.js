const submitBtn = document.getElementById('btn-submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');

submitBtn.addEventListener('click', () => {
    let canSubmit = true;
    
    if (username.validity.patternMismatch || username.validity.valueMissing) {
        document.getElementById('username-error').classList.remove('invisible');
        canSubmit = false;
    }
    else {
        document.getElementById('username-error').classList.add('invisible');
    }

    if (email.validity.patternMismatch || email.validity.valueMissing) {
        document.getElementById('email-error').classList.remove('invisible');
        canSubmit = false;
    }
    else {
        document.getElementById('email-error').classList.add('invisible');
    }


    if (age.validity.rangeUnderflow || age.validity.valueMissing || age.validity.rangeUnderflow) {
        document.getElementById('age-error').classList.remove('invisible');
        canSubmit = false;
    }
    else {
        document.getElementById('age-error').classList.add('invisible');
    }


    if (canSubmit) {
        alert("FORM SUBMITTED");
    }
    else {
        preventDefault();
    }
})