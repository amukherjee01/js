let datas = [
    {name : "aditya", proffesion : "Software engineer"},
    {name : "abhishek", proffesion : "Software engineer"},
]

let getDatas =  function(){
    setTimeout(() => {
        datas.forEach((element)=>{
            console.log(element.name);
        })
    }, 1000);
}



// let createDatas = function(newdata, callback){
//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000);
// }

let createDatas = function(newdata){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("kuch sahi nhi hai");
            }
        }, 2000);
    })
}


// // getDatas();
// createDatas({name : 'sameeksha', proffesion: 'Software engineer'}, getDatas)

// createDatas({name : 'sameeksha', proffesion: 'Software engineer'}).then(getDatas).catch(err=> console.log(err))

//Async await
async function start(){
    await createDatas({name : 'sameeksha', proffesion: 'Software engineer'})
    getDatas();
}

start();