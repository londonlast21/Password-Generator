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
  var charType = prompt("Enter a character type: special, numeric, lower case, or upper case.");
  //generate the password from user input
    var characters = "";
    var charTypeEntry = charType.toLowerCase();
    if (charTypeEntry === "lower case") {

      characters = "abcdefghijklmnopqrstuvwxyz";

    } else if(charTypeEntry === "upper case") {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if(charTypeEntry === "numeric") {
      characters = "0123456789";
    }else if (charTypeEntry === "special") {
      characters = "!@#$%^&*()";
    }
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
