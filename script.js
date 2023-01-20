// Assignment Code put in numbers, lowercase, uppercase symbols and numbers.
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var numbers=confirm("Do you want numbers?");
  var length=prompt("How many characters would you like your password to be?");
  var lowercaseLetters=confirm("Do you want lowercase letters?");
  var upppercaseLetters=confirm("Do you want uppercase letters?");
  var symbols=confirm("Do you want symbols?");
  var password="";
  console.log(length);
  console.log(numbers);
  console.log(lowercaseLetters);
  console.log(upppercaseLetters);
  console.log(symbols);
  var numbers=[1,2,3,4,5,7,8,9,0];
  var symbols=["@","#","!","$","%","&","*"];
  var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  console.log(lowercaseLetters);
  console.log(upppercaseLetters);
  console.log(symbols);
  console.log(numbers);

  for (let index = 0; index < length; index++) {
   if(upppercaseLetters && password.length<length){
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
   }

   if(lowercaseLetters && password.length<length){
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];}

    if(numbers && password.length<length){
      password+=numbers[Math.floor(Math.random()*numbers.length)];
    }

      if(symbols && password.length<length){
        password+=symbols[Math.floor(Math.random()*symbols.length)];
      }
    
  }
  
    return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
