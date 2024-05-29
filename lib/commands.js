const setParameterHandler = require('./setParameterHandler');
const removeParameterHandler = require('./removeParameterHandler');
const addParametersHandler = require('./addParametersHandler');

Cypress.Commands.overwrite('visit', addParametersHandler)
Cypress.Commands.add('setParameter', setParameterHandler);
Cypress.Commands.add('removeParameter', removeParameterHandler);