// challenge 3

var bills = [124, 48, 268]
var tips = []
var finalBills = []

function calculateTip(bill){
  var tip;
  if (bill < 50){
    tip = bill * 0.2
  } else if (bill >= 50 && bill < 200){
    tip = bill * 0.15
  } else{
    tip = bill * 0.1
  }
  return tip
}

for (bill of bills) {
  var finalTip = calculateTip(bill)
  var amount = bill + finalTip
  tips.push(finalTip)
  finalBills.push(amount)
}


console.log(tips, finalBills)
