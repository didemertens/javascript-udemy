
var MAINAPP = (function(app) {
    var jsonObj = {};

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                jsonObj = JSON.parse(xobj.responseText);
                popHtml();
            }
        };
        xobj.send(null);
    };
    
    
    var popHtml = function(){
        // Title
        document.querySelector('.title').innerHTML = jsonObj.heading;

        // Bullets
        var bullets = document.getElementsByTagName('li');
        for (i = 1; i < bullets.length + 1; i++) {
            document.getElementById('b'+ [i]).innerHTML = jsonObj.bullets[i];
        };
    };

    // Init
    loadJSON('data.json');

        
    // Public
    app.popHtml = popHtml;
    return app

}(MAINAPP || {}));

