let randomNumber = Math.round(Math.random() * 500);
let victory = false;

while(!victory){

let userInput = Number(prompt("Saisisez un nombre !"));

switch(true){

    case userInput === randomNumber:
    alert('You won!');
    victory = true;
    break;

    case userInput > randomNumber:
    alert("C'est moins!")
    break;

    case userInput < randomNumber:
    alert("C'est plus!");
    break;
}

console.log(userInput);

}