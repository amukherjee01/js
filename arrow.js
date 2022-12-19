// const sayHello =  function(name){
//     return "Hello " + name
// }

// console.log(sayHello('aditya'))

// const sayHello =  (name) => {
//     return `Hello ${name}`
// }

// console.log(sayHello('aditya'))



const sayHello =  (name) =>  `Hello ${name}`


console.log(sayHello('aditya'))

const Todos = [
    {
        title : 'Buy Bread',
        isDone : false
    },
    {
        title : 'Go to Gym',
        isDone : true
    },
    {
        title: 'Buy samosa',
        isDone : true
    }]

const thingsDone = Todos.filter((todo)=>{
    return todo.isDone === true
})

let title = thingsDone.forEach((todos,  index)=>{
    console.log(todos.title)    
})

const camera = {
    price : 7000,
    weight : 2000,
    getDesc(){
        return `This is cannon camera of price ${this.price}$`
    }
}

console.log(camera.getDesc())









