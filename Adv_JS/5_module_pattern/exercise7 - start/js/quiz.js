var MAINAPP = (function(q){

    // sub model
    sub = q.quiz = q.quiz || {};

    //dependencies
    var domMA = q.dom;

            /*
        Quiz Functionality
        */
    var checkAnswer = function(value) {
        var ans,
            correct,
            result;

        if (value !== "") {
            ans = breakOut(domMA.data(domMA.$('#q01'), 'answer'), ",");
            correct = ans.every(function(val) {
                return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
            });
            result = (correct) ? 'correct' : 'incorrect';
            displayFeedback(result);
        } else {
            displayFeedback('no-answer');
        }
    };

    var displayFeedback = function(result) {
        var feedback = domMA.$('.feedback.' + result);
        domMA.addClass(feedback, 'visible');
    };

    var hideFeedback = function() {
        var feedback = domMA.$('.feedback.visible');
        domMA.removeClass(feedback, 'visible');
    };

    // Public
    sub.checkAnswer = checkAnswer;
    sub.displayFeedback = displayFeedback;
    sub.hideFeedback = hideFeedback;

    return q;

}(MAINAPP || {}));