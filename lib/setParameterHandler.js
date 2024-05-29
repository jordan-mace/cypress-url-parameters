const CYPRESS_ENV_NAME = "UrlParameters";
const setParameter = (name, value) => {
  var currentVal = Cypress.env(CYPRESS_ENV_NAME);

  if(currentVal === undefined || currentVal === null || currentVal === '')
    Cypress.env(CYPRESS_ENV_NAME, addParameter(name, value, ''));
  else
    Cypress.env(CYPRESS_ENV_NAME, addParameter(name, value, currentVal))
}

const addParameter = (key, value, currentVal) => {
    currentVal += (currentVal.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
    return currentVal;
}

module.exports = setParameter;