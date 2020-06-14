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

   while (isNaN(length) || length < 8 || length > 128 || length === "" || length === null) {

     length = Number(prompt("Invalid entry. Please enter number from 8 to 128."));

   }
  
  //user validation
   window.alert("You have chosen " + length + " characters.");
  
  


  //ask for character type
  var charType = prompt("Enter a character type: 'special', 'numeric', 'lower case', or 'upper case'. If choosing two, use the word 'and' and include entire term .");

  //generate the password from user input
  var characters = "";
  var charTypeEntry = charType.toLowerCase();
  console.log("CHAR TYPES SELECTED STRING: ", charTypeEntry)

  let charSetSelected = false

  if (charTypeEntry.includes("lower case")) {

    characters = characters + "abcdefghijklmnopqrstuvwxyz";
    charSetSelected = true;
  }

  if (charTypeEntry.includes("upper case")) {
    characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSetSelected = true;
  }

  if (charTypeEntry.includes("numeric")) {

    characters = characters + "0123456789";
    charSetSelected = true;

  }

  if (charTypeEntry.includes("special")) {

    characters = characters + "!@#$%^&*()";
    charSetSelected = true;

  }

  // while (!charSetSelected){
  //   //charType = prompt("Invalid Entry! Enter a character type: 'special', 'numeric', 'lower case', or 'upper case'. If choosing two, use the word 'and' and include entire term .")
  // }




  console.log("HERES YOUR FINAL SET OF CHARS BUD: ",characters)


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
