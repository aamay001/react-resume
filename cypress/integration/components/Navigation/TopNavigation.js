/// <reference types="cypress" />

context('Menu', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('Clicking close button closes side menu', () => {
    // Sidebar should be visible in opening state
    cy.get('#root > div > aside > div.ui.scale.down.left.wide').should('be.visible');

    // Target the close button and click
    cy.get('.right > .x.icon')
      .click();

    // Assert that the sidebar is no longer visible
    cy.get('#root > div > aside > div.ui.scale.down.left.wide').should('not.be.visible');
  });
});
