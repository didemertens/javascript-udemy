// function statements and expressions

// first declaration
// function whatDoYouDo(job,firstName){}

// expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids.'
    case 'designer':
      return firstName + ' creates websites.'
    default:
      return firstName + ' does something else.'
  }
}

console.log(whatDoYouDo('teacher', 'John'));
