// functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
      return function(name) {
        console.log(name + ', can you please explain what UX design is?');
      }
    } else if (job === 'teacher') {
        return function(name){
        console.log(name + ', what do you teach?')
        };
    } else {
      return function(name) {
        console.log('Hello ' + name + ', what do you do?');
      }
    }
  }

var teacherQuestion =
interviewQuestion('teacher');
var designerQuestion =
interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
