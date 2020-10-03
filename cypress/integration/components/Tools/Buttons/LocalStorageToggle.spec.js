/// <reference types="cypress" />

const defaultValues = {
  autoSave: false,
  autoSaveOnToast: ' 💾 Auto save to local storage is now on!',
  autoSaveOffToast: ' ⚠️ Auto save to local storage is now off!',
};

context('Auto Save to Local Storage Button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle auto save to local storage button', () => {
    cy.get('[data-testid=autoSave]').click();
    cy.get('[data-testid=autoSave] > div').should((!defaultValues.autoSave ? '' : 'not.') + 'have.class', 'checked');
    cy.get('.Toastify__toast-container')
      .should('be.visible')
      .contains(!defaultValues.autoSave ? defaultValues.autoSaveOnToast : defaultValues.autoSaveOffToast);

    cy.get('[data-testid=autoSave]').click();
    cy.get('[data-testid=autoSave] > div').should((defaultValues.autoSave ? '' : 'not.') + 'have.class', 'checked');
    cy.get('.Toastify__toast-container')
      .should('be.visible')
      .contains(defaultValues.autoSave ? defaultValues.autoSaveOnToast : defaultValues.autoSaveOffToast);
  });
});
