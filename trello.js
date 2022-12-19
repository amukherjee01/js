// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','saturday','Sunday']

// let sayHello = function(){
//     console.log("Hello User")
// }

// days.forEach(function(day,index){
//     console.log(`${day} index --- ${index+1}`);
// });


// for(index=0; index<days.length; index++){
//     console.log(days[index]);
// }

// for (let index = days.length-1; index >= 0; index--) {
//     console.log(days[index]);
    
// }

// const myTodos = []

// myTodos.push('Buy bread');
// myTodos.push('Go to Gym');
// myTodos.push('Eat food');

// myTodos.forEach(function(todo, index){
//     console.log(`Your task no. ${index+1} is ${todo}`)
// })

const myTodos = []
myTodos.unshift("Buy Bread");
myTodos.unshift("Go to Gym");
myTodos.unshift("Eat Food");

for(i=0; i<myTodos.length; i++){
    console.log(myTodos[i]);
}