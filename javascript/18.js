//Selector
const form = document.getElementById("form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');


//Event Handler
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput();
})


//Functions
function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue=="") {
        showError(username, "Username cannot be left empty"); 
    }
    else if (!isUserNameValid(usernameValue)) {
       showError(username, "Username not valid");  
    }
    else {
        showSuccess(username);
    }

    
    if (emailValue == "") {
        showError(email, "Email cannot be left empty"); 
        
    }
    else if (!isEmailValid(emailValue)) {
        showError(email, "Email not valid");
    }
    else {
        showSuccess(email);
    }


    if (password1Value) {
        showSuccess(password1);
    }
    else {
        showError(password1, "Password cannot be left empty"); 
    }


    if (password2Value) {
        if (password1.value == password2.value) {
            showSuccess(password2);
        }
        else {
            showError(password2, "Password can't be different");
        }
    }
    else {
        showError(password2, "Confirm your password"); 
    }
}
function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = " form-control success";
    
}
function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = " form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = msg;

}
function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-z]+)\.([a-z]{2,3})$/.test(email);
}
function isUserNameValid(username) {
    return /^([a-z0-9]{4,9})/.test(username);
}