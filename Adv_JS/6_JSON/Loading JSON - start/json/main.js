var MAINAPP = (function(app) {
    var jsonOjb = {};

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                app.jsonOjb = JSON.parse(xobj.responseText);
            }
        };
        xobj.send(null);
    };


    // Public
    app.jsonOjb = jsonOjb;
    app.loadJSON = loadJSON;
    return app;
})(MAINAPP || {});