/// <reference types="cypress" />

context('More Visibility Button', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('should open More Visibility Modal', () => {
    cy.get('.modals.visible').should('not.exist')
    cy.get('button').contains('More Visibility').click()
    const modal = cy.get('.modals.visible')
    modal.should('exist')
    modal.contains('More Visibility')
  });

});
