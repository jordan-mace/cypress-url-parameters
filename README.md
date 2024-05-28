# cypress-url-parameters
Adds dynamic URL parameter support to Cypress

## Purpose
This project came about as essentially a fix to an issue I've been having on work projects. Cypress tests that are scattered across multiple test files all making calls to `visit` to navigate needed a way to easily add something like `?environment=test`

This package aims to fix that problem, by overwriting the `visit` command and appending each parameter added to a `Map` onto the end of the url prior to Cypress navigating.

## Usage
Parameters are stored in a list in memory. To add a parameter, use `setParameter`
```
setParameter('token', 'abcd');
cy.visit('http://localhost:3000'); goes to http://localhost:3000?token=abcd
```

If you need to update a parameter, simple use `setParameter` with the same parameter name.

To remove a parameter, use `removeParameter`
```
setParameter('token', 'abcd');
cy.visit('http://localhost:3000'); // goes to http://localhost:3000?token=abcd
removeParameter('token');
cy.visit('http://localhost:3000'); // goes to http://localhost:3000
```