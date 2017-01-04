let first = [1, 2, 3];
let second = [4, 5, 6];

function addThreeThings(a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);
addThreeThings(...second);
