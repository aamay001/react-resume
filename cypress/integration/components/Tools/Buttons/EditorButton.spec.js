/// <reference types="cypress" />

context('Click Editor Button Go to Editor page and return to home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle Editor Button', () => {
    cy.get('#root > div > aside > div > div:nth-child(4) > button').click();
    cy.get('#root > div > div.ui.scale.down.right.very.wide.visible.sidebar > div.ui.massive.borderless.top.attached.menu > div:nth-child(1)')
      .contains('Code Editor');
    cy.get('body > div:nth-child(6) > div > div > div > div').
    contains('⚠️ Auto save to local storage is turned off!').click();
    cy.get('#root > div > div.ui.scale.down.right.very.wide.visible.sidebar > div.ui.massive.borderless.top.attached.menu > a').click();
    cy.get('#root > div > aside > div > div:nth-child(2) > h1 > span')
    .contains('JSON Resume');    
  });
});
