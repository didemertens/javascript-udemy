// challenge 7

(function Question() {
  var input;
  var score = 0;
  questions = [
              {questionOne: 'What is coding like?',
              answers: ['0) Fun', '1) Boring', '2) Exhausting'],
              correctAnswer: '0',
              display: function(){
                console.log(this.questionOne);
                for (var i = 0; i < this.answers.length; i++){
                  console.log(this.answers[i])
                }},
              checkAnswer: function(){
                if (input === this.correctAnswer){
                  score++;
                  console.log("Correct!");
                } else{
                  console.log("Nope, sorry.");
                }},
                showScore: function(){
                  console.log('You\re score is: ' + score)
                },
              },

              {questionTwo: 'What is the teacher\'s name?',
              answers: ['0) Bram', '1) Sebas', '2) Jonas'],
              correctAnswer: '2',
              display: function(){
                console.log(this.questionTwo);
                for (var i = 0; i < this.answers.length; i++){
                  console.log(this.answers[i]);
                }},
              checkAnswer: function(){
                if (input === this.correctAnswer){
                  score++;
                  console.log("Correct!");
                } else{
                  console.log("Nope, sorry.");
                }},
                showScore: function(){
                  console.log('You\re score is: ' + score)
                },
              },

              {questionThree: 'What are we learning?',
              answers: ['0) Python', '1) JavaScript', '2) Java'],
              correctAnswer: '1',
              display: function(){
                console.log(this.questionThree);
                for (var i = 0; i < this.answers.length; i++){
                  console.log(this.answers[i]);
                }},
              checkAnswer: function(){
                if (input === this.correctAnswer){
                  score++;
                  console.log("Correct!");
                } else{
                  console.log("Nope, sorry.");
                }},
              showScore: function(){
                console.log('You\re score is: ' + score)
                },
              },
              ];
  function askQuestions(){
    var keepAsking = true;
    while (keepAsking){
      var number = Math.floor(Math.random() * 3);
      questions[number].display()
      input = prompt("Answer the question in console:")
      if (input !== 'exit'){
        questions[number].checkAnswer();
        questions[number].showScore();
      } else if (input === 'exit') {
        keepAsking = false;
      };
    };
  };
  askQuestions();
})();




