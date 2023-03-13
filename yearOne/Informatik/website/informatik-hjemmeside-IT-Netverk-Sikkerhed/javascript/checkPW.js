function getPassword() {
    var text = document.getElementById('password').value;
    
    var length = document.getElementById('length');
    var lowercase = document.getElementById('lowercase');
    var uppercase = document.getElementById('uppercase');
    var number = document.getElementById('number');
    var special = document.getElementById('special');

    // add the id active-password to the div thaht contains the password
    checkIfEightChar(text) ? length.classList.add('active-success') : length.classList.remove('active-success');
    checkIfOneLowercase(text) ? lowercase.classList.add('active-success') : lowercase.classList.remove('active-success');
    checkIfOneUppercase(text) ? uppercase.classList.add('active-success') : uppercase.classList.remove('active-success');
    checkIfOneDigit(text) ? number.classList.add('active-success') : number.classList.remove('active-success');
    checkIfOneSpecialChar(text) ? special.classList.add('active-success') : special.classList.remove('active-success');
    
}

function checkIfEightChar(text){
    return text.length >= 8;
}

function checkIfOneLowercase(text) {
    return /[a-z]/.test(text);
}

function checkIfOneUppercase(text) {
    return /[A-Z]/.test(text);
}

function checkIfOneDigit(text) {
    return /[0-9]/.test(text);
}

function checkIfOneSpecialChar(text) {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text);
}

function togglePassword() {
    var passInput = document.getElementById('password');
    var togglePW = document.getElementById('togglePW');

    passInput.type === "password" ? passInput.type = "text" : passInput.type = "password";
    togglePW.textContent === "Show Password" ? togglePW.textContent = "Hide Password" : togglePW.textContent = "Show Password";
}