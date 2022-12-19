// alert('hello')

document.querySelector('.myform').addEventListener('submit', (event)=>{
    event.preventDefault()
    let pass = event.target.pass.value
    let confpass = event.target.confpass.value
    // let paraElement = document.createElement('p')
    let contenttext = ''
    if(pass !== confpass){
        // paraElement.textContent = 'Password dont match'
        // paraElement.style.color = 'red'
        contenttext = 'Password dont match'
    }else{
        // paraElement.textContent = 'Login Success'
        // paraElement.style.color = 'green'
        contenttext = 'Password  match'
    }


    document.querySelector('#status').textContent = contenttext
    document.querySelector('#status').style.color = 'red'

})