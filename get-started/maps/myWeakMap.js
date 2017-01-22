var myMap = new WeakMap();

//API
/*
set()
get()
size
clear()
has()
*/

var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
//myMap.set('string', 2);

// console.log(myMap.get('foo'));
// console.log(myMap.size);
// console.log(myMap.has('foo'));

//Iterators
//keys()
//entries()
//values

// for (var key of myMap.keys()) {
//   console.log(key);
// }

// for (var value of myMap.values()) {
//   console.log(value);
// }

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
