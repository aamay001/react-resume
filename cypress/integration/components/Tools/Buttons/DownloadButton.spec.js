/// <reference types="cypress" />

context('Click Download Button', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should click Download Button', () => {
      cy.get('#root > div > aside > div > div:nth-child(9) > a[download="resume.json"]');
      cy.fixture('downloadButtonfile').as('expectedValueinAttribute').then(($expectedValueinAttribute) =>
      {          
      cy.get('#root > div > aside > div > div:nth-child(9) > a')      
      .should('have.attr', 'href').and('include', $expectedValueinAttribute)
      .then((href) => {
        cy.visit(href)
      })
    })
    });
  });
  
  
  