import '../../index'

describe('template spec', () => {
  it('passes', () => {
    cy.setParameter('test', 'deez')
    cy.visit('https://example.cypress.io/');

    cy.removeParameter('test');
    cy.visit('https://example.cypress.io/');

    cy.setParameter('test', 'deez');
    cy.setParameter('test2', 'deez2');
    cy.setParameter('test3', 'deez3');
    cy.visit('https://example.cypress.io/');

    cy.removeParameter('test2');
    cy.visit('https://example.cypress.io/');
  })
})