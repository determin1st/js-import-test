var lib = (function(isStrict) {
  var lib = (function() {
    "use strict";
    return {
      func: (function() {
        console.log('poop');
      })
    };
  })();
  isStrict && (window.$PHP$ = lib);
  return lib;
})(((function(){return !this;})()));
