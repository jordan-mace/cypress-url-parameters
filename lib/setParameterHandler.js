const setString = require('./utils/setString');
const CYPRESS_ENV_NAME = require('./utils/globals');

const setParameter = (name, value) => {
  var currentVal = Cypress.env(CYPRESS_ENV_NAME);

  if(currentVal === undefined || currentVal === null || currentVal === '')
    Cypress.env(CYPRESS_ENV_NAME, setString(name, value, ''));
  else
    Cypress.env(CYPRESS_ENV_NAME, setString(name, value, currentVal))
}

module.exports = setParameter;