// first-class functions

var years = [1990, 1994, 1995, 1944, 2005, 1988];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
      arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
  return 2019 - el;
};

function isFullAge(el) {
  return el >= 18;
};

function maxHeartrate(el) {

  if (el >= 18 && el <= 81) {
  return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
};

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartrate);
console.log(ages);
console.log(fullAges);
console.log(rates);
