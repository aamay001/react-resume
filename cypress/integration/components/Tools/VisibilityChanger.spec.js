/// <reference types="cypress" />

context('Visibility changer (toggle buttons)', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('should toggle dark mode', () => {
    cy.get('div.App').should('not.have.class', 'darkMode');
    cy.get('[data-testid=darkMode]').click();
    cy.get('div.App').should('have.class', 'darkMode');
    cy.get('[data-testid=darkMode]').click();
    cy.get('div.App').should('not.have.class', 'darkMode');
  });

  it('should toggle email', () => {
    cy.get('[data-testid=Email]').should('exist');
    cy.get('[data-testid=showEmail]').click();
    cy.get('[data-testid=Email]').should('not.exist');
    cy.get('[data-testid=showEmail]').click();
    cy.get('[data-testid=Email]').should('exist');
  });

  it('should toggle phone', () => {
    cy.get('[data-testid=Phone]').should('exist');
    cy.get('[data-testid=showPhone]').click();
    cy.get('[data-testid=Phone]').should('not.exist');
    cy.get('[data-testid=showPhone]').click();
    cy.get('[data-testid=Phone]').should('exist');
  });

  it('should toggle github', () => {
    cy.get('[data-testid=Github]').should('not.exist');
    cy.get('[data-testid=showGithub]').click();
    cy.get('[data-testid=Github]').should('exist');
    cy.get('[data-testid=showGithub]').click();
    cy.get('[data-testid=Github]').should('not.exist');
  });

});
