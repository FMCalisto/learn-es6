var color = "red";
var speed = 10;

// function go() {
//     console.log("vroom");
// }

go = () => {
  console.log("vroom");
}

var car = { color, speed, go };

console.log(car.color);
console.log(car.speed);

car.go();
