//created an object with the output from our 4 functions

var random = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
}


var generateBtn = document.querySelector("generate");


var generateElement = document.getElementById('result');



//generating a function to prompt the user for the password requisites 

function generate(){
numberOfCharacters = prompt("How many characters do you want in your password? Note: It must be between 8 and 128 characters for password security");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

grammar = confirm("Should we include a mix of uppercase and lowercase? *** Press OK for Yes or Cancel for No***");
if (grammar) {
  var turnToLowercase = alert("The password will include a mix of lowercase and uppercase letters");
}
else {
  alert("Your password will NOT have a mix of lowercase and uppercase letters.");
}

numerals = confirm("Should we include numbers in your password? *** Press OK for Yes or Cancel for No***");
  if (numerals) {
    alert ("The Password will include numbers");
  }
  else {
    alert("No numbers will be included in the password");
  }

hieroglyphics = confirm("Should we include special characters in your password?");
  if(hieroglyphics) {
    alert ("We will include special characters in the new password");
  } 
  else {
    alert ("The password will not include any special characters");
  }


}




// Defined 4 functions for random lowercase, uppercase, numbers, and symbols.
function getRandomLower(){
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  lowercase[Math.floor(Math.random()*lowercase.length)];
}


function getRandomUpper(){
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppercase[Math.floor(Math.random()*uppercase.length)];
}


function getRandomNumber(){
  var digits = '0123456789';
  return digits[Math.floor(Math.random()*digits.length)];
}

function getRandomSymbol(){
  var symbol = '~!@#$%^&*()_{}:?';
  return symbol[Math.floor(Math.random()*symbol.length)];
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





//generate a password function


function random(lower,upper,number,symbol) {
  return {
      lower: lower,
      upper: upper,
      number: number,
      symbol: symbol,
  };
}

console.log(random)