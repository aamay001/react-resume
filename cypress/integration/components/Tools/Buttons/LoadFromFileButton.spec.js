/// <reference types="cypress" />

context('Click LoadFromFile Button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should click LoadFromFile Button', () => {
    cy.get('#root > div > aside > div > div:nth-child(10) > button').click();
        cy.fixture('resume.json').then(fileContent => {
        cy.get('#root > div > aside > div > div:nth-child(10) > input[type=file]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'resume.json',
            mimeType: 'text/json'
        });
    });
    cy.get('body > div > div > div.Toastify__toast-container.Toastify__toast-container--top-center > div > div.Toastify__toast-body.resume-toast-body')
    .contains('🙌 Resume loaded from file!');
  });
});


