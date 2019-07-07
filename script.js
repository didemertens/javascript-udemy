// challenge 5

john = {
  bills : [124, 48, 268, 180, 42],
  calcTips : function(){
    this.tips = [];
    this.amount = [];
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = 0.2
      } else if (this.bills[i] > 50 && this.bills[i] < 200){
        percentage = 0.15
      } else{
        percentage = 0.1
      };
      this.tips.push(this.bills[i]*percentage)
      this.amount.push(this.bills[i]*percentage + this.bills[i])
    };
    return [this.tips, this.amount];
  }
}

mark = {
  bills : [77, 75, 110, 45],
  tips : [],
  amount : [],
  calcTips : function(){
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        percentage = 0.2
      } else if (this.bills[i] > 100 && this.bills[i] < 300){
        percentage = 0.1
      } else{
        percentage = 0.25
      };
      this.tips.push(this.bills[i]*percentage)
      this.amount.push(this.bills[i]*percentage + this.bills[i])
    };
    return [this.tips, this.amount];
  }
}

function calcAverageTip(tips){
  var sum = 0
  for (var i = 0; i < tips.length; i++){
    sum += tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverageTip(john.tips);
mark.average = calcAverageTip(mark.tips);

if (john.average > mark.average){
  console.log('John has paid more tips than mark, with an average of ' + calcAverageTip(john.tips));
} else if (john.average === mark.average){
  console.log('John and Mark have paid the same tip of ' + calcAverageTip(mark.tips));
} else{
  console.log('Mark has paid more tips than john with an average of ' + calcAverageTip(mark.tips));
};

