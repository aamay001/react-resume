// <reference types="cypress" />
import resumeData from '../../../../../src/migratedresume-data';

context('Click Download Button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should click Download Button', () => {
    const resumePayload = `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(resumeData, null, '\t'))}`;
    cy.get('#root > div > aside > div > div:nth-child(9) > a[download="resume.json"]');
    cy.get('#root > div > aside > div > div:nth-child(9) > a')
      .should('have.attr', 'href').and('include', resumePayload)
      .then((href) => {
        cy.visit(href);
      });
  });
});
