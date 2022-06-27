

var password = document.getElementById("pass");
var confirm_password = document.getElementById("pass-conf");
var passError = document.getElementById("pass-error") 

function validatePassword(){

if(password.value != confirm_password.value) {
  password.setCustomValidity(" Passwords don't match ");
  password.style.cssText = "background-color: rgba(255, 0, 0, 0.3);"
  confirm_password.style.cssText = "background-color: rgba(255, 255, 0, 0.3);"
  passError.textContent = "Passwords don't match "
} else if (password.value.length < 5) {
  password.setCustomValidity("Password needs to be at least 5 characters long");
  password.style.cssText = "background-color: rgba(255, 0, 0, 0.3);"
  passError.textContent = " Password needs to be at least 5 characters long"
} else {
  password.setCustomValidity('');
  password.style.cssText = "background-color: none"
  confirm_password.style.cssText = "background-color: none"
  passError.textContent = ""
}
}


password.onkeyup = validatePassword;
confirm_password.onkeyup = validatePassword;

password.onfocus = password.style.cssText = ""