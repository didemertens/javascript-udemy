// bind, call, apply

var john = {
  name : 'John',
  age : 26,
  job : 'teacher',
  presentation : function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay
        + ', Ladies & Gentleman. I\'m ' + this.name + '. I work as a ' +
        this.job + ' and am ' + this.age + ' years old.')
    } else if (style === 'friendly') {
        console.log('Hey! It\'s ' + timeOfDay +
          ' and I\'m ' + this.name + ' and work as a ' +
        this.job)
    }
  }
};


var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
};


john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon')

var johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('afternoon');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');
