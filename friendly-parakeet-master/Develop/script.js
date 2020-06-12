// Assignment code here
//----//
//when user clicks button, prompt for criteria appears
// user enters criteria to include in password
// user is prompted to determine length of password min 8 max 128
// user is prompted to enter special character type inclusion:
//lower case, uppercase, numeric and/or special
//when all prompts answered, password is generated that matches criteria
//password is printed on screen

//with each prompt entry user entry is validated and at least one char type is selecte

var length = prompt("Please choose number of characters, between 8 and 128.");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
