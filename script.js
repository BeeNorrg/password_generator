// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = 0;
var lowerCase = true;
var upperCase = false;
var special = false;
var numeric = false;

function promptMe(){
  passwordLength = prompt("Please choose a password length between 8 and 128 characters"); 
  lowerCase = prompt("Do you want your password to include lowercase letters? (y/n)");
  upperCase = prompt("Do you want your password to include uppercase letters? (y/n)");
  special = prompt("Do you want your password to include special characters? (y/n)");
  numeric = prompt("Do you want to include numbers in you password? (y/n)");

  return [passwordLength, lowerCase, upperCase, special, numeric];
}

