// function combined(val1: number | string, val2: number | string) {
//   return val1 + val2;
// }
// console.log(combined(4, "is the answer"));
function combinedValues(num1, num2) {
    return num1 + num2;
}
var fncResults;
fncResults = combinedValues;
// fncResults = 8;
console.log(fncResults(2, 2));
//creating a callback function
function greetings(fn, sn, cb) {
    var greetings = "Good morning " + fn + sn;
    cb(greetings);
}
greetings("Mends", "Albert", function (res) {
    console.log(res);
});
