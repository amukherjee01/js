let myTodos = {
    day: 'Monday',
    meetings : 0,
    meetDone : 0
}

let addMeetings = function(obj, meet = 0){
    obj.meetings = obj.meetings + meet
}

let meetDone = function(obj, meet = 0){
    obj.meetDone = obj.meetDone - meet
}

let resetMeetings = function(myTodos){
    myTodos.meetings = 0
    myTodos.meetDone = 0
}

let getSummary =  function(obj){
    let meetLeft = obj.meetings + obj.meetDone
    return `You have ${meetLeft} meetings today`
}

addMeetings(myTodos, 4)
addMeetings(myTodos,2)

meetDone(myTodos,5)
console.log(getSummary(myTodos))