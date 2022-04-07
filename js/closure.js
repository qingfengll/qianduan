//
// for(var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100)
// }
//
// for(let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100)
// }

for(var i = 0; i < 5; i++) {
    (function(n) {
        setTimeout(function () {
            console.log(n);
        }, 100)
    })(i)
}
