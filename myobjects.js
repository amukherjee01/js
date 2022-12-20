let myYoutubeVideo = {
    title : 'For loops in javaScript',
    description : 'This is for loop video',
    author : 'Aditya Mukherjee',
    videoLength : 15
}

console.log(`Hey this video title is ${myYoutubeVideo.title} by author ${myYoutubeVideo.author}`);

let changeVideoLength = function(myobj){
    return {
        formatOne : `Time of this video is ${myobj.videoLength + 2}`,
        formatTwo : `Time of this video is ${myobj.videoLength + 4}`
    }
}

adOne = changeVideoLength(myYoutubeVideo);
console.log(adOne.formatTwo);

let myYoutubeVideoList = [{
    title : 'For loops in javaScript',
    description : 'This is for loop video',
    author : 'Aditya Mukherjee',
    videoLength : 15
},
{
    title : 'ForEach loops in javaScript',
    description : 'This is forEach loop video',
    author : 'Abhishek Singh',
    videoLength : 17
},

{
    title : 'If statement in javascript',
    description : 'This if statement  video',
    author : 'Hitesh Chowdhary',
    videoLength : 18
},

]

myYoutubeVideoList.forEach(function(myVideo, index){
    console.log(myVideo.title);
})

let obj = {
    name : 'aditya',
    addr : 'vns',
    sub : ['phys','chem','maths'],
    background : {
        10:70,
        12: 85,
        btech:65,
        name1 : 'hello',
        'name2':'hii'
    }
}

console.log(obj.background['10']);
console.log(obj.background.btech);

