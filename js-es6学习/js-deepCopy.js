let obj = [];
for (let i = 0; i < 10000000; i++) {
    obj[i] = {name: "hello world"};
}

const startTime1 = new Date().getTime();
const parseObj = JSON.parse(JSON.stringify(obj));
const endTime1 = new Date().getTime();
console.log(endTime1 - startTime1);

const startTime2 = new Date().getTime();
obj.forEach(function(item){
    const tempItem = {...item};
})
const endTime2 = new Date().getTime();
console.log(endTime2 - startTime2);