
export default (async function() {
  var shim;
  await import('./lib.js');
  shim = window.$PHP$;
  delete window.$PHP$;
  return shim;
})();

