function varFunc () {
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for(i = 0; i < n; i += 1) {
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

function letFunc () {
  let previous = 0;
  let current = 1;

  for(let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }
}
