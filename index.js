const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

function generatePasswords() {
    
    let characterLength = 15
    let randomPasswordOne = []
    let randomPasswordTwo = []

for (i = 0; i < characterLength; i++) {
    //Generate a randomIndex
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    //Add the character at the random index to the result array
    randomPasswordOne.push(characters[randomIndexOne])
    randomPasswordTwo.push(characters[randomIndexTwo])
    // Log out the random array
    }
    //Combine the items in the array
    let combinedArrayOne = randomPasswordOne.join('')
    let combinedArrayTwo = randomPasswordTwo.join('')
    passwordOneEl.textContent = combinedArrayOne
    passwordTwoEl.textContent = combinedArrayTwo
}


