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

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
// var specialChar = " !&$%#()*+-,.:;<>=?@[]{}^_|~`/\\\"/'" (couldn't get all special characters to work)
var specialChar = "!&$%#()*+-,.:;<>=?@[]{}^_|~`" 
var numericChar = "1234567890"

//selects random number from string
function rand_from (word){
  var n=Math.floor(Math.random()*word.length)
  return word[n]
}

//function generates password
function genPass(){
  var results = promptMe()
  var pass = ""
  
  passwordLength = parseInt(results[0]);
  lowerCase = (results[1] === "y");
  upperCase = (results[2] === "y");
  specialChar = (results[3] === "y")
  numeric = (results[4] === "y");

 
}

