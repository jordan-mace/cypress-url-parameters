import { addParameters } from './parameters';
Cypress.Commands.overwrite('visit', addParameters)

export * from './parameters';