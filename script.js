// Assignment Code put in numbers, lowercase, uppercase symbols and numbers.
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var numbers=confirm("Do you want numbers?");
  var length=prompt("How many characters would you like your password to be?");
  var lowercaseLetters=confirm("Do you want lowercase letters?");
  var upppercaseLetters=confirm("Do you want uppercase letters?");
  var symbols=confirm("Do you want symbols?");
  var characters=confirm("Do you want characters?");
  console.log(length)
  console.log(numbers)
  console.log(lowercaseLetters);
  console.log(upppercaseLetters);
  console.log(symbols);
  var numbers=[1,2,3,4,5,7,8,9,0]
  var symbols=["@","#","!","$","%","&","*"]
  var characterCodes = Array.from(Array(26)).map( (_, i) => i = 97);
  var lowercaseLetters = characterCodes.map(code = String.fromCharCode(code));
  var upppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
  console.log(lowercaseLetters);
  console.log(upppercaseLetters);
  console.log(symbols);
  
  // password generator
  var generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) =>{
    var availableCharacters = [
      ...(hasSymbols ? symbols ; []);
      ...(hasNumbers ? numbers ; []);
      ...(hasLowercase ? lowercaseLetters ; []);
      ...(hasUppercase ? hasUppercase ; []);
    ];
    console.log(availableCharacters); 

    let password = "";

    if(availableCharacters.length = < 8) return "";
    if(availableCharacters.length = >128) return "";
    

  }
    
  
  
  return "Fillin"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
