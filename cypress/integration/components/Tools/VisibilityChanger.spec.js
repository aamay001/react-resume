/// <reference types="cypress" />

const defaultValues = {
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: false,
  showTechSkills: true,
  showSkillLevel: false,
  showProjects: true,
  showEducation: true,
  showCertification: true,
  showExperience: true,
  showLinkedIn: false,
  showWebsite: true,
  showIcon: true,
  darkMode: false,
};

context('Visibility changer (toggle buttons)', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('should toggle dark mode', () => {
    cy.get('div.App').should((defaultValues.darkMode ? '' : 'not.') + 'have.class', 'darkMode');
    cy.get('[data-testid=darkMode]').click();
    cy.get('div.App').should((!defaultValues.darkMode ? '' : 'not.') + 'have.class', 'darkMode');
    cy.get('[data-testid=darkMode]').click();
    cy.get('div.App').should((defaultValues.darkMode ? '' : 'not.') + 'have.class', 'darkMode');
  });

  it('should toggle email', () => {
    cy.get('[data-testid=Email]').should((defaultValues.showEmail ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showEmail]').click();
    cy.get('[data-testid=Email]').should((!defaultValues.showEmail ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showEmail]').click();
    cy.get('[data-testid=Email]').should((defaultValues.showEmail ? '' : 'not.') + 'exist');
  });

  it('should toggle phone', () => {
    cy.get('[data-testid=Phone]').should((defaultValues.showPhone ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showPhone]').click();
    cy.get('[data-testid=Phone]').should((!defaultValues.showPhone ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showPhone]').click();
    cy.get('[data-testid=Phone]').should((defaultValues.showPhone ? '' : 'not.') + 'exist');
  });

  it('should toggle github', () => {
    cy.get('[data-testid=Github]').should((defaultValues.showGithub ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showGithub]').click();
    cy.get('[data-testid=Github]').should((!defaultValues.showGithub ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showGithub]').click();
    cy.get('[data-testid=Github]').should((defaultValues.showGithub ? '' : 'not.') + 'exist');
  });

});
