function* greet() {
  let friendly = yield "How";
  friendly = yield friendly + "are";
  yield friendly + "you?";
}

var greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next(" the hack").value);
console.log(greeter.next(" silly ol'").value);
