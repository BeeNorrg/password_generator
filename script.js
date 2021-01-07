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

function promptMe(){
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
  var lowerCase = prompt("Do you want your password to include lowercase letters?");
  var upperCase = prompt("Do you want your password to include uppercase letters?");
  var special = prompt("Do you want your password to include special characters?");
  var numeric = prompt("Do you want to include numbers in you password?");
}
