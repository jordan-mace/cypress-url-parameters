const removeString = require('./utils/removeString');
const CYPRESS_ENV_NAME = "UrlParameters";

const removeParameter = (name) => {
  var currentVal = Cypress.env(CYPRESS_ENV_NAME);
  if(currentVal === undefined || currentVal === null || currentVal === '')
    return;

  Cypress.env(CYPRESS_ENV_NAME, removeString(name, currentVal));
}

module.exports = removeParameter;