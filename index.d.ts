/// <reference types="Cypress" />

type Parameter = {
  name: string,
  value: string
}

declare namespace Cypress {
  interface Chainable {
    getVisual(selector: string): Chainable<any>
  }
}