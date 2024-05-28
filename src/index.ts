import { addParameters } from './utils/parameters';

Cypress.Commands.overwrite('visit', addParameters)