function min(array) {
  var smallest = Number.POSITIVE_INFINITY;

  for (var index = 0; index < array.length; index++) {
    var current = array[index];
    if (current < smallest) {
      smallest = current;
    }
  }

  return smallest;
}

function max(array) {
  var largest = Number.NEGATIVE_INFINITY;

  for (var index = 0; index < array.length; index++) {
    var current = array[index];
    if (current > largest) {
      largest = current;
    }
  }

  return largest;
}

function sum(array) {
  var total = 0;

  for (var index = 0; index < array.length; index++) {
    total += array[index];
  }

  return total;
}

function average(array) {
  return sum(array) / array.length;
}


function maxMinAverage(array) {
  var largest = max(array);
  var smallest = min(array);
  var avg = average(array);
  return 'The minimum is ' + smallest + ', the maximum is ' + largest + ', and the average is ' + avg + '.';
}

console.log(maxMinAverage([1, -2, 9, 4]));