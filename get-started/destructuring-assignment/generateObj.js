function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}

var {name, state} = generateObj();

console.log(name);
console.log(state);
