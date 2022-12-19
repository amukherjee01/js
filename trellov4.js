const  myTodos = [
{
    title : 'Buy Bread',
    isDone : false
}, 
{
    title : 'Go to Gym',
    isDone : false
}, 
{
    title : 'Write code',
    isDone : true
}]


// let searchelement = function(myarrobj, title){
//     const index = myarrobj.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })

//     return index
// }


// let element = searchelement(myTodos, 'GO to GYM')
// console.log(element)


let searchelement = function(myarrobj, title){
    const index = myarrobj.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return index.title
}


let element = searchelement(myTodos, 'GO to GYM')
console.log(element)