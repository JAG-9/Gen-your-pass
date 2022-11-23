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


var numb = "0123456789"
var lowchar = "abcdefghijklmnopqrstuvwxyz"
var spcchar = "!@#$%^&*()"
var lowchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var userInput

userInput = window.prompt("Chose your password length between (8-128 charatcters)")
