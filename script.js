var scoreJohn = (100 + 100 + 13) / 3
var scoreMark = (100 + 100 + 103) / 3
var scoreMary = (100 + 100 + 110) / 3

scoreJohn > scoreMark && scoreJohn > scoreMary ? console.log('John\'s team did better than Mark and Mary, with a score of ' + scoreJohn)
  : scoreMark > scoreJohn && scoreMark > scoreMary ? console.log('Mark\'s team did better than John and Mary, with a score of ' + scoreMark)
  : scoreJohn === scoreMark && scoreJohn === scoreMary ? console.log('John\'s, Mark\'s and Mary\'s team have the same score of ' + scoreJohn)
  : scoreJohn === scoreMark ? console.log('John\'s and Mark\'s teams have the same score of ' + scoreJohn)
  : scoreJohn === scoreMary ? console.log('John\'s and Mary\'s teams have the same score of ' + scoreJohn)
  : scoreMary === scoreMark ? console.log('Mark\'s and Mary\'s teams have the same score of ' + scoreMark)
  : console.log('Mary\'s team did better than John\'s and Mark\'s with a score of ' + scoreMary)

if (scoreJohn > scoreMark){
  console.log('John did better with a score of ' + scoreJohn);
} else if (scoreJohn === scoreMark){
  console.log('John and Mark have the same score of ' + scoreJohn);
} else {
  console.log('Mark did better with a score of ' + scoreMark);
}
