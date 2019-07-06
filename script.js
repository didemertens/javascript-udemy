// challenge 4

var john = {
  fullName: 'John Smith',
  mass: 70,
  height: 1.80,
  bmiCalc: function (){
    this.bmi = this.mass / (this.height * this.height);
  },
}

var mark = {
  fullName: 'Mark Mert',
  mass: 70,
  height: 1.80,
  bmiCalc: function (){
    this.bmi = this.mass / (this.height * this.height);
  },
}

if (john.bmiCalc() > mark.bmiCalc()) {
  console.log(john.fullName + ' has a higher bmi of ' + john.bmi);
} else if (john.bmi === mark.bmi){
  console.log(john.fullName + ' and ' + mark.fullName +
              ' both have a bmi of ' + john.bmi);
} else{
  console.log(mark.fullName + ' has a higher bmi of ' + mark.bmi);
};
