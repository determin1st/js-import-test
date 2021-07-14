var lib = (function() {
  var lib = (function() {
    "use strict";
    return {
      func: (function() {
        console.log('poop');
      })
    };
  })();
  ((function(){return !this;})()) && (window.$PHP$ = lib);
  return lib;
})();
