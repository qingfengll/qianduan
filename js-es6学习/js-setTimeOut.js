let startTime = new Date().getTime();
let endTime = 0;
setTimeout(function(){
    endTime = new Date().getTime();
    console.log(endTime - startTime);
},1000);
console.log(startTime);