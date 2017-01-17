function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}

var {name: firstName, state: location} = generateObj();

console.log(firstName);
console.log(location);
