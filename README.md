# cypress-url-parameters
Adds dynamic URL parameter support to Cypress

## Purpose
This project came about as essentially a fix to an issue I've been having on work projects. Cypress tests that are scattered across multiple test files all making calls to `visit` to navigate needed a way to easily add something like `?environment=test`

This package aims to fix that problem, by overwriting the `visit` command and appending each parameter added to a Cypress env variable onto the end of the url prior to Cypress navigating.

## Usage
To add a parameter, use `cy.setParameter`. All subsequent `visit` calls will honor the query parameter.
```
import 'cypress-url-parameters'

cy.setParameter('token', 'XXXXX')
cy.visit('https://example.cypress.io/');
```

If you need to update a parameter, simple use `setParameter` with the same parameter name and your new value.

To remove a parameter, use `removeParameter`
```
import 'cypress-url-parameters'

cy.setParameter('token', 'XXXXX');
cy.visit('https://example.cypress.io/');

cy.removeParameter('token');
cy.visit('https://example.cypress.io/');
```