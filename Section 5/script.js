//Closures

// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function(yearOfBirth){
//     var age = 2019 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }

// var retirementUS = retirement(66)
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// // retirement(66)(1990);


function interviewQuestion(job) {
  return function(name) {
    var a;
    if (job === 'teacher') {
      a = ', what do you teach?'
    } else if (job === 'designer') {
      a = ', explain to me what UX design is.'
    } else {
      a = ', what do you do?'
    };
    console.log(name + a);
  }
}

interviewQuestion('gardener')('john')
