// setTimeout(() => {
//   console.log(3)
// });
//
// getPromise();
//
// async function getPromise() {
//   console.log(4);
//   await test();
//   console.log(5);
// }
//
// console.log(8);
//
//
// async function test() {
//
// }


const p = new Promise(resolve => {
  console.log('a')
  resolve()
  console.log('b')
})

p.then(() => {
  console.log('c')
})

console.log('d')
