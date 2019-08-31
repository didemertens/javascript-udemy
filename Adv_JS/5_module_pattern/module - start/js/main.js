var MAINAPP = (function(nsp, $, domU, strU, quizU) {
    /*
    Quiz Functionality
    */
    var initQuiz = function() {
            domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                quizU.hideFeedback();
                quizU.checkAnswer($('#q01_ans')[0].value);
            });
        };

    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string, UTIL.quiz);