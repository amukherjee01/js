var div = document.querySelector('#myid');
var btn1= document.querySelector('#mybtn')

console.log(btn1);
div.addEventListener("click", ()=>{
    console.log("button clicked");
})

btn1.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("button1 clicked");
})

/*
let arr = [];
let number;
do {
    number = Number.parseInt(prompt("Enter Number"));
    arr.push(number);
} while (number!==0);

console.log(arr);


let newArray = arr.filter((element)=>{
    return element%10==0;
})

console.log(newArray);
*/

//Guess the number
let totalchance = 10;
let chance = 0;
while (chance < totalchance) {
    let guessnumber = Number.parseInt(prompt("Guess the number betwen 1 to 10"))
    let randomnumber = Math.floor(Math.random() * 10)

    if (guessnumber>randomnumber) {
        console.log("Your entered number is more then the random number");
    }
    if (guessnumber<randomnumber) {
        console.log("Your entered number is less then the random number");
    }
    if (guessnumber==randomnumber) {
        console.log(`You win. Total points ${totalchance-chance}`);
        break;
    }
    chance += 1;
}