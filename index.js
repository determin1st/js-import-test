import * as lib from "./lib.module.js";

(async function() {
  const poop = await lib.default;
  poop.func();
})();

