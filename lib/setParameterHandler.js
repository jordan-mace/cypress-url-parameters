import { setString } from "./utils/strings";

const CYPRESS_ENV_NAME = "UrlParameters";
const setParameter = (name, value) => {
  var currentVal = Cypress.env(CYPRESS_ENV_NAME);

  if(currentVal === undefined || currentVal === null || currentVal === '')
    Cypress.env(CYPRESS_ENV_NAME, setString(name, value, ''));
  else
    Cypress.env(CYPRESS_ENV_NAME, setString(name, value, currentVal))
}

module.exports = setParameter;