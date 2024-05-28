/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable {
    getVisual(selector: string): Chainable<any>
  }
}