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

  it('should toggle linkedin', () => {
    cy.get('[data-testid=LinkedIn]').should((defaultValues.showLinkedIn ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showLinkedIn]').click();
    cy.get('[data-testid=LinkedIn]').should((!defaultValues.showLinkedIn ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showLinkedIn]').click();
    cy.get('[data-testid=LinkedIn]').should((defaultValues.showLinkedIn ? '' : 'not.') + 'exist');
  });

  it('should toggle Website', () => {
    cy.get('[data-testid=Website]').should((defaultValues.showWebsite ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showWebsite]').click();
    cy.get('[data-testid=Website]').should((!defaultValues.showWebsite ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showWebsite]').click();
    cy.get('[data-testid=Website]').should((defaultValues.showWebsite ? '' : 'not.') + 'exist');
  });

  it('should toggle Icon', () => {
    cy.get('[data-testid=Email] > a > img').should((defaultValues.showIcon ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showIcon]').click();
    cy.get('[data-testid=Email] > a > img').should((!defaultValues.showIcon ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showIcon]').click();
    cy.get('[data-testid=Email] > a > img').should((defaultValues.showIcon ? '' : 'not.') + 'exist');
  });

  it('should toggle Address', () => {
    cy.get('[data-testid=Address]').should((defaultValues.showAddress ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showAddress]').click();
    cy.get('[data-testid=Address]').should((!defaultValues.showAddress ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showAddress]').click();
    cy.get('[data-testid=Address]').should((defaultValues.showAddress ? '' : 'not.') + 'exist');
  });

  it('should toggle Certification', () => {
    cy.get('[data-testid=Certification]').should((defaultValues.showCertification ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showCertification]').click();
    cy.get('[data-testid=Certification]').should((!defaultValues.showCertification ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showCertification]').click();
    cy.get('[data-testid=Certification]').should((defaultValues.showCertification ? '' : 'not.') + 'exist');
  });

  it('should toggle Education', () => {
    cy.get('[data-testid=Education]').should((defaultValues.showEducation ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showEducation]').click();
    cy.get('[data-testid=Education]').should((!defaultValues.showEducation ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showEducation]').click();
    cy.get('[data-testid=Education]').should((defaultValues.showEducation ? '' : 'not.') + 'exist');
  });

  it('should toggle Experience', () => {
    cy.get('[data-testid=Experience]').should((defaultValues.showExperience ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showExperience]').click();
    cy.get('[data-testid=Experience]').should((!defaultValues.showExperience ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showExperience]').click();
    cy.get('[data-testid=Experience]').should((defaultValues.showExperience ? '' : 'not.') + 'exist');
  });

  it('should toggle Projects', () => {
    cy.get('[data-testid=Projects]').should((defaultValues.showProjects ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showProjects]').click();
    cy.get('[data-testid=Projects]').should((!defaultValues.showProjects ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showProjects]').click();
    cy.get('[data-testid=Projects]').should((defaultValues.showProjects ? '' : 'not.') + 'exist');
  });

  it('should toggle TechSkills', () => {
    cy.get('[data-testid=TechSkills]').should((defaultValues.showTechSkills ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showTechSkills]').click();
    cy.get('[data-testid=TechSkills]').should((!defaultValues.showTechSkills ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showTechSkills]').click();
    cy.get('[data-testid=TechSkills]').should((defaultValues.showTechSkills ? '' : 'not.') + 'exist');
  });

  it('should toggle SkillLevel', () => {
    const selectorSkillLevel = '[data-testid=TechSkills] > .grid-container > .grid-column > .tech-skills-keyword > .keyword-level';
    cy.get(selectorSkillLevel).should((defaultValues.showSkillLevel ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showSkillLevel]').click();
    cy.get(selectorSkillLevel).should((!defaultValues.showSkillLevel ? '' : 'not.') + 'exist');
    cy.get('[data-testid=showSkillLevel]').click();
    cy.get(selectorSkillLevel).should((defaultValues.showSkillLevel ? '' : 'not.') + 'exist');
  });

});
