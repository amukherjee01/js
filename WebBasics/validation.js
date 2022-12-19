function myValidation(){
    let value = document.getElementById('myform').value
    let paraElement = document.querySelector('#name')
    let newElement = document.createElement('p')
    if(isNaN(value) || value < 1 || value >20){
        paraElement.textContent = 'Not a valid input'
        newElement.textContent = 'Not a valid input'

    }else {
        paraElement.textContent = 'Valid input'
        newElement.textContent = 'Valid input'
    }

    document.querySelector('body').appendChild(newElement)

    
}

//form validation

document.querySelector('.myvalidform').addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)

    event.target.username.value = ''
    event.target.realname.value = ''
})