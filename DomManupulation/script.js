console.log(document.URL);

console.log(document.body);
document.title = "Changed via Js"

var ptag = document.querySelector('p')
console.log(ptag.innerText);

var ptags = document.querySelectorAll('p');
console.log(ptags);

ptags[0].textContent = "Changed via js"


var spantag = document.querySelector('#stag');
console.log(spantag);

var containerdiv = document.querySelectorAll(".container")
containerdiv = Array.from(containerdiv)
console.log(containerdiv);
console.log(containerdiv[0]);

var newelement = document.createElement("h2");
newelement.textContent = "I am added via Js";

document.querySelector('body').appendChild(newelement);


//EventListner
document.querySelector('button').addEventListener("click", (event)=>{
    event.target.innerText = "I am Clicked!!"
    console.log("I am clicked");
})