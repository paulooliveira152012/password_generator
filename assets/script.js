var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*?/"
var letterBank = ""

// 1st - create variable and refference it to the #generate element
var generateBtn = document.querySelector("#generate");

var length; //whatever input is selected will be "length"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword = function() {
  lengthPrompt() // 1- calling function
  var number = window.confirm("Would you like your password to include Numbers?");
  var lCase = window.confirm("Would you like your password to include Lower case characters?");
  var uCase = window.confirm("Would you like your password to include upper case charecters?");
  var special = window.confirm("Would you like your password to include special characters?");
  if (number == true) {
      letterBank = letterBank + numbers
  }; 
  if (uCase == true) {
      letterBank = letterBank + upperCase
  };
  if (lCase == true) {
      letterBank = letterBank + lowerCase
  }; 
  if (special == true) {
      letterBank = letterBank + specialCharacters
  };
  if (!letterBank) {
      alert("Please, select valid options")
      generatePassword();
  }
  var password = "";
  for (var i = 0; i < length; i++) {
      var value = Math.floor(Math.random() * letterBank.length)
      password = password + letterBank [value] 
  };
  return password;
  
};
console.log (password);

function lengthPrompt() { //2- ask prompt until user puts the right number
  length = window.prompt("How long do you want your password to be? choose a number between 8 and 128 charaacters.")
  if (length < 8 || length > 128) {
    window.alert("Please, make sure your password ranges between 8 and 128 characters")
    lengthPrompt()
  }; 
};

