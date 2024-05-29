/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        setParameter(name: string, value: string);
        removeParameter(name: string);
    }
}