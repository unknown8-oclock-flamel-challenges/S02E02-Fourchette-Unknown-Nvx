let randomNumber = Math.round(Math.random() * 500);
let victory = false;
let count = 0;

while(!victory){
let userInput = Number(prompt("Saisisez un nombre !"));
count++;

switch(true){

    case userInput === randomNumber:
    alert(`You won in ${count} tries!`);
    victory = true;
    break;

    case userInput > randomNumber:
    alert("C'est moins!")
    break;

    case userInput < randomNumber:
    alert("C'est plus!");
    break;
}
}
