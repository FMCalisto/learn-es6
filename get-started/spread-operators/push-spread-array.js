let first = [1, 2, 3];
let second = [4, 5, 6];

// [ 1, 2, 3, [ 4, 5, 6 ] ]
//first.push(second);

// [ 1, 2, 3, 4, 5, 6 ]
first.push(...second);

console.log(first);
