//set main namespace
goog.provide('chapter3');

//get requirements
goog.require('lime.Director');

// entrypoint
chapter3.start = function(){
    
    var director = new lime.Director(document.bodym800,640);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('chapter3.start', chapter3.start);
