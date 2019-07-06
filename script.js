// functions

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0){
  console.log(firstName + ' retires in ' + retirement + ' years.')
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1993, 'John');
yearsUntilRetirement(1929, 'Jane');
