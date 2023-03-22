const setItem = (key, item) => {
  if (window.localStorage) {
    localStorage.setItem(key, btoa(JSON.stringify(item)));
    return true;
  }
  return false;
};

const getItem = (key) => {
  try {
    if (window.localStorage) {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(atob(item));
      }
    }
  } catch (error) {
    return undefined;
  }
  return undefined;
};

const clear = (key) => {
  if (window.localStorage) {
    localStorage.clear(key);
  }
};

const removeItem = (key) => {
  if (window.localStorage) {
    localStorage.removeItem(key);
  }
};

export default {
  setItem,
  getItem,
  clear,
  removeItem,
};
