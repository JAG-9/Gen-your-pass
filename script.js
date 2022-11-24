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
var uppchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var userInput;


allChar = numb + lowchar + spcchar + uppchar
//console.log(allChar)

lowUpNum = uppchar + lowchar + numb

lowNumSp = lowchar + numb + spcchar

upNumSp = uppchar + numb + spcchar

lowSpUp = lowchar + uppchar + spcchar

lowUp = lowchar + uppchar

lowNum = lowchar + numb

lowSp = lowchar + spcchar

upNum = uppchar + numb

upSp = uppchar + spcchar

//function for generate password button
function generatePassword() {
  userInput = window.prompt("How many characters would you like your password to contain? (8-128 charatcters)")
if (!userInput ){
  return "Generator cancelled, please try again." 
}else if (userInput >=8 && userInput <=128) {
  numb = window.confirm("Would you like to include numbers?")
  spcchar= window.confirm("Would you like to include special characters?")
lowchar = window.confirm("Would you like to include lowercase charatcters?")
  uppchar = window.confirm("Would you like to include uppercase charatcters?")
}else{
  generatePassword()
}
//no resutls found
if (!numb && !spcchar && !lowchar && !uppchar){
  return "No characters selected. Try again."
}
//all char
else if(numb && spcchar && lowchar && uppchar){
  var result = ""
  for (let i=0; i<userInput; i++){
  result += allChar[Math.floor(Math.random() * allChar.length)]
   //console.log(Math.floor(Math.random() * allChar.length))
  }
  //console.log(allChar.length)
  //console.log(result)
  return result
}

//no special
else if(numb && !spcchar && lowchar && uppchar){
  var result = ""
  for (let i=0; i<userInput; i++){
  result += lowUpNum[Math.floor(Math.random() * lowUpNum.length)]
   //console.log(Math.floor(Math.random() * allChar.length))
  }
  return result
}

//no lowercase
else if(numb && spcchar && !lowchar && uppchar){
  var result = ""
  for (let i=0; i<userInput; i++){
  result += upNumSp[Math.floor(Math.random() * upNumSp.length)]
   //console.log(Math.floor(Math.random() * allChar.length))
  }
  return result
}

//no uppercase
else if(numb && spcchar && lowchar && !uppchar){
  var result = ""
  for (let i=0; i<userInput; i++){
  result += lowNumSp[Math.floor(Math.random() * lowNumSp.length)]
   //console.log(Math.floor(Math.random() * allChar.length))
  }
  return result
}


//no numb
else if(!numb && spcchar && lowchar && uppchar){
  var result = ""
  for (let i=0; i<userInput; i++){
  result += lowSpUp[Math.floor(Math.random() * lowSpUp.length)]
   console.log(Math.floor(Math.random() * lowSpUp.length))
  }
  return result
}

};
