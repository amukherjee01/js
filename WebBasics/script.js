// alert('File is attached')
// console.log(document.URL)

let myelement = document.querySelector('p')
console.log(myelement);

let allelements = document.querySelectorAll('p')
console.log(allelements);


allelements.forEach(function(ele){
    ele.textContent = 'I am changed via JS'
})

//Create new element

let newelement = document.createElement('p')
newelement.textContent = 'I am created via JS'
newelement.id = "js"
newelement.style = 'background:blue'
document.querySelector('body').appendChild(newelement)


let element = document.getElementById('js').innerHTML
console.log(element);

let username = document.getElementById('username')
console.log(username);

//EventListener in JS
document.getElementById('btn').addEventListener('click', function(event){
    event.target.textContent = 'I was clicked!!'
})

//Track input form

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value)
})


