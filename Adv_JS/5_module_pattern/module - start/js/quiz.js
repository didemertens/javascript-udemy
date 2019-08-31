var UTIL = (function(q) {

    // Set up sub module
    var sub = q.quiz = q.quiz || {};

    // Dependencies
    var domU = q.dom;
    var strU = q.string;

    var checkAnswer = function(value) {
        var ans,
            correct,
            result;
    
        if (value !== "") {
            ans = strU.breakOut(domU.data(domU.$('#q01'), 'answer'), ",");
            correct = ans.every(function(val) {
                return (value.indexOf(val) > -1);
            });
            result = (correct) ? 'correct' : 'incorrect';
            displayFeedback(result);
        } else {
            displayFeedback('no-answer');
        };
    };

    var displayFeedback = function(result) {
        var feedback = domU.$('.feedback.' + result);
        domU.addClass(feedback, 'visible');
    };

    var hideFeedback = function() {
        var feedback = domU.$('.feedback.visible');
        domU.removeClass(feedback, 'visible');
    };

    // Public
    sub.displayFeedback = displayFeedback;
    sub.hideFeedback = hideFeedback;
    sub.checkAnswer = checkAnswer;
    
    return q;

}(UTIL || {}));

