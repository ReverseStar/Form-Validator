const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Add Evenet Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(username.value);

    if (username.value === '') {
        showError(username, 'Username is Required');
    }
    else{
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is Required');
    }
    else if(!isValidEmail(email.value)){
        showError(email, 'Email is not Valid');
    }
    else{
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is Required');
    }
    else{
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Confirm Password is Required');
    }
    else{
        showSuccess(password2);
    }
    checkPassword(password, password2);
})

//Check Password Validity
function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password did not match');
    }
}


//showError Function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error input';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success input';
}

//Email Validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}