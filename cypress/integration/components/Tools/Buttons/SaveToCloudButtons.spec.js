/// <reference types="cypress" />


context('Click SaveToCloud buttons', { execTimeout: 30000 }, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle GoogleDrive SaveToCloudButton', () => {
    cy.get('#root > div > aside > div > div:nth-child(3) > div:nth-child(2) > button.ui.yellow.big.icon.button').click();
    cy.get('body > div.ui.top.aligned.page.modals.dimmer.transition.visible.active > div > div.content > div > div > p').contains('Google Drive');
  });

  it('should toggle DropBox SaveToCloudButton', () => {
    cy.get('#root > div > aside > div > div:nth-child(3) > div:nth-child(2) > button.ui.twitter.big.icon.button').click();
    cy.get('body > div.ui.top.aligned.page.modals.dimmer.transition.visible.active > div > div.content > div > div > p').contains('Dropbox');
  });

  it('should toggle OneDrive SaveToCloudButton', () => {
    cy.get('#root > div > aside > div > div:nth-child(3) > div:nth-child(2) > button.ui.facebook.big.icon.button').click();
    cy.get('body > div.ui.top.aligned.page.modals.dimmer.transition.visible.active > div > div.content > div > div > p').contains('OneDrive');

  });

});