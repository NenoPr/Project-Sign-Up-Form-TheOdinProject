

var password = document.getElementById("pass");
var confirm_password = document.getElementById("pass-conf");

function validatePassword(){
if(password.value != confirm_password.value) {
  password.setCustomValidity("Passwords Don't Match");
} else {
  password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

