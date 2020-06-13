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
 function generatePassword() {
   //ask for length when button clicked
  var length = Number(prompt("Please enter number of characters, from 8 to 128."));
    



  //ask for character type
  var charType = prompt("Enter a character type: special, numeric, lower case, or upper case. If choosing two, use the word 'and' .");
  //generate the password from user input
    var characters = "";
    var charTypeEntry = charType.toLowerCase();
    if (charTypeEntry === "lower case" || charTypeEntry === "LOWER CASE") {

      characters = "abcdefghijklmnopqrstuvwxyz";

    } else if(charTypeEntry === "upper case" || charTypeEntry === "UPPER CASE") {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if(charTypeEntry === "numeric" || charTypeEntry === "NUMERIC") {
      characters = "0123456789";
    } else if (charTypeEntry === "special" || charTypeEntry === "SPECIAL") {
      characters = "!@#$%^&*()";
    } else if (charTypeEntry === "special and upper case" || charTypeEntry === "SPECIAL AND UPPER CASE" || charTypeEntry === "upper case and special" || charTypeEntry === "UPPER CASE AND SPECIAL") {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    } else if (charTypeEntry === "numeric and upper case" || charTypeEntry === "NUMERIC AND UPPER CASE" || charTypeEntry === "upper case and numeric" || charTypeEntry === "UPPER CASE AND NUMERIC") {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (charTypeEntry === "special and lower case" || charTypeEntry === "SPECIAL AND LOWER CASE" || charTypeEntry === "lower case and special" || charTypeEntry === "LOWER CASE AND SPECIAL") {
      characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()"
    }
    //up to here works
    //return value
    var returnValue = "";
    for (var i = 0; i < length; i++) {
      //picks a character set within the charType index
      returnValue += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return returnValue;

    
    
    }






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
