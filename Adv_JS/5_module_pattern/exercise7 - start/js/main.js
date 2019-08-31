
var MAINAPP = (function(nsp, $, domMA, strMA, quizMA) {

    /*
    Other Utilities
    */

    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    var initQuiz = function() {
        domMA.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
            quizMA.hideFeedback();
            quizMA.checkAnswer($('#q01_ans')[0].value);
        });
    };

    /*
    Setup
    */
    domReady(function() {
        initQuiz();
    });
    
})(MAINAPP || {}, MAINAPP.dom.$, MAINAPP.dom, MAINAPP.string, MAINAPP.quiz);