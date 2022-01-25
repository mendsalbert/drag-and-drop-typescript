// function combined(val1: number | string, val2: number | string) {
//   return val1 + val2;
// }

// console.log(combined(4, "is the answer"));

function combinedValues(num1: number, num2: number) {
  return num1 + num2;
}

let fncResults: (a: number, b: number) => number;
fncResults = combinedValues;
// fncResults = 8;
console.log(fncResults(2, 2));

//creating a callback function

function greetings(fn: string, sn: string, cb: (fullname: string) => void) {
  var greetings = "Good morning " + fn + sn;
  cb(greetings);
}

greetings("Mends", "Albert", (res) => {
  console.log(res);
});
