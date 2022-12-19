let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,
    addMeetings : function(num){
        this.meetings = this.meetings + num
    },

    meetingDone : function(num){
        this.meetDone = num
    },

    resetMeeting : function(){
        this.meetings =0
        this.meetDone = 0
    },

    getSummary : function(){
        return `you have ${this.meetings- this.meetDone} meetings today`
    }
}

myTodos.addMeetings(4)
myTodos.addMeetings(2)
myTodos.meetingDone(5)
console.log(myTodos.getSummary())