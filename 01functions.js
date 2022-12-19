let sayHello = function(name){
    console.log(`Greeting Message for ${name}`)
}

sayHello('John');

let fullNameMaker = function(firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName}`);
}

fullNameMaker('aditya','mukherjee');

let myAdder = function(num1, num2){
    return num1 + num2;
}

result = myAdder(10,20);
console.log(result);

let myMultiplier = function(firstNum=10, secondNum=10){
    return firstNum * secondNum;
}

mulresult = myMultiplier();
console.log(`Result of multiplication is ${mulresult}`);