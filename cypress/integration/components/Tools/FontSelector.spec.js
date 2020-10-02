/// <reference types="cypress" />

context('Font Selector', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');

    cy.get('[data-cy=font-selector]').as('fontSelector');
  });

  it('should display a select element', () => {
    cy.get('@fontSelector').should('be.visible');
  });

  it('changes the font of the resume when a font is selected', () => {
    const fontLabel = 'Arimo';
    const fontStyle = 'Arimo, sans-serif';

    cy.get('.resume').as('resume');

    cy.get('@resume').should('not.have.css', 'font-family', fontStyle);

    cy.get('@fontSelector')
        .select(fontLabel)
        .should('have.value', fontStyle);

    cy.get('@resume').should('have.css', 'font-family', fontStyle);
  })
});
