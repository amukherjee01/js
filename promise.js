// Promise - Best video on promises
// -Resolve
// -Reject
// -Pending

//  function func1(){
//      return new Promise(function(resolve, reject){
//          setTimeout(() => {
//              const error = true;
//              if(!error){
//              console.log('Your promise has been resolved')
//              resolve()
//              }
//              else{
//                  console.log('Your promise has not been resolved')
//                  reject('sorry not fullfilled')
//              } 
//          }, 2000);
//      })
//  }


//  func1().then(function(){
//      console.log('Thanks for resolving')
//  }).catch(function(msg){
//      console.log('Very bad bro ' + msg)
//  })


 //Using fetch api

//  const request = fetch('https://restcountries.com/v3/name/peru')
//  console.log(request);


//Callback hell
//  setTimeout(() => {
//     console.log('1st callback called') 
//     setTimeout(() => {
//        console.log('2nd callback called') 
//        setTimeout(() => {
//           console.log('3rd callback called') 
//           setTimeout(() => {
//             console.log('4th callback called')
//             setTimeout(() => {
//                console.log('5th callback called') 
//             }, 1000); 
//          }, 1000);
//        }, 1000);
//     }, 1000);
//  }, 1000);



// setTimeout(() => {
//     console.log("First callback called");
//     setTimeout(() => {
//         console.log("Second callback called");
//     }, 2000);
// }, 5000);


function HelloWorld(callback){
    console.log('Hello world!!')
    callback()
}

function myname(){
    console.log('My name is aditya')
}

let result = HelloWorld(myname)




