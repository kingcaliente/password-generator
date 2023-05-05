//created an object with the 

var random = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}


var generateBtn = document.querySelector("generate");


var generateElement = document.getElementById('result');



function generate(){
  prompt ('Welcome to The Password Generator, How many characters in your Password?');
  return random
    
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