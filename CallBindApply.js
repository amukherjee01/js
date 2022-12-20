let userDetails = {
    name : "aditya",
    age : 28,
    designation : "software engineer",
    printDetails : function(city, country){
        console.log(this.name + " from " + city + " " + country);
    }
}

userDetails.printDetails("varanasi", "india");

let userDetails2 = {
    name : "anuj",
    age : 29,
    designation : "software engineer",
}

//Generic function
function UserInfo(city, country){
    console.log(`username : ${this.name} age : ${this.age} designation : ${this.designation} city : ${city} Country : ${country}`);
}

//Function borrowing
userDetails.printDetails.call(userDetails2, "varanasi", "india")  //executing here

// UserInfo.call(userDetails)
// UserInfo.call(userDetails2)

//Pass the parameters as list of array
UserInfo.apply(userDetails, ["varanasi", "india"]);
UserInfo.apply(userDetails2, ["varanasi", "india"])

//Bind (execute later)
let newfunc = userDetails.printDetails.bind(userDetails2, "varanasi", "india")
newfunc();