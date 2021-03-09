let map = new Map();
map.set('name','wang');
map.get('name');
console.log(map.size);
map.has('name');
map.delete('name');
map.set('age','18');
map.clear();
map.set('address','beijing');
map.set('sex','nan');

console.log([...map.keys()]);
console.log([...map.values()]);
console.log(...map.entries());
console.log(map.get('name'));

let map2 = new Map([[1,'one']]);
console.log(map2);

let test = {};
console.log(test?.name);