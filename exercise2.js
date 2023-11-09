(function() {
  console.log(`The code [5, 15, 55, 515] count "5 return: ${countFrequency([5, 15, 55, 515], 5)}`);
  console.log(`The code [5, 15, 55, 515] count "1" return: ${countFrequency([5, 15, 55, 515], 1)}`);
  console.log(`The code [55555] count "1" return: ${countFrequency([55555], 1)}`);
})();

function countFrequency(number, digit) {
  let numbers = [...number.toString()];
  numbers = numbers.filter(number => number == digit);
  return numbers.length;
}