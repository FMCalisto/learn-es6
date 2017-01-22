function* greet() {
  console.log(`Generators are "lazy"`);
  yield "How";
  console.log(`Called until the second next`);
  yield "are";
  console.log(`Call me before "you?"`);
  yield "you?";
  console.log(`Called when done`);
}

var greeter = greet();
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
