/* globals window localStorage */
/**
 * @module "localStorage.helper"
 * @description Local Storage helper module. This module is a simple
 * wrapper to the global localStorage API. The functions check for the availability
 * of local storage before calling the corresponding local storage api method.
 * <br/><br/>
 * @name "localStorage.helper"
 * @author Andy Amaya
 * @exports ls
 */

/**
 * @name setItem
 * @type {function}
 * @description Sets an item in local storage.
 * @param {string} key The identifier for item to store.
 * @param {any} item The item to store in local storage.
 */
const setItem = (key, item) => {
  if (window.localStorage) {
    localStorage.setItem(key, item);
  }
};

/**
 * @name getItem
 * @type {function}
 * @param {string} key The identifier for a local storage item.
 * @description Returns an item from local storage that matches
 * the key provided.
 */
const getItem = (key) => {
  if (window.localStorage) {
    const i = localStorage.getItem(key);
    return i;
  }
  return undefined;
};

/**
 * @name clear
 * @type {function}
 * @description Clears the contents of local storage.
 */
const clear = () => {
  if (window.localStorage && localStorage.length > 0) {
    localStorage.clear();
  }
};

export default {
  setItem,
  getItem,
  clear,
};
