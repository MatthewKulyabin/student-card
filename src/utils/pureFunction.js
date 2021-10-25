export const getCapitalString = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const addToLocalStorage = (fieldName, data) => {
  localStorage.setItem(fieldName, JSON.stringify(data));
};

export const getFromLocalStorage = (fieldName) => {
  return JSON.parse(localStorage.getItem(fieldName));
};
