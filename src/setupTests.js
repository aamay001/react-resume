global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

global.localStorage = {
  setItem: function(name, value){},
  getItem: function(name){return null}
}