const CYPRESS_ENV_NAME = "UrlParameters";
const removeParameter = (name) => {
  var currentVal = Cypress.env(CYPRESS_ENV_NAME);
  if(currentVal === undefined || currentVal === null || currentVal === '')
    return;

  var index = currentVal.indexOf(name);
  var length = currentVal.indexOf('&', index) == -1 ? currentVal.length : currentVal.indexOf('&', index);
  if(index == -1) return;
  
  Cypress.env(CYPRESS_ENV_NAME, currentVal.substring(0, index - 1) + currentVal.substring(length, currentVal.length));
}

module.exports = removeParameter;