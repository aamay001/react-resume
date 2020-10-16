// <reference types="cypress" />

const jsonEdited = {
  header: {
    name: 'Cypress',
    email: 'cypress@domain.com',
    phone: '987-654-3210',
    github: 'https://github.com/cypress',
    linkedin: 'https://linkedin.com/in/cypress',
    address: '123 Cypress Street',
    website: 'https://Cypress.com',
    city: 'Cypress',
    state: 'CY',
    zip: '99999',
    country: 'FR',
  },
  experience: [
    {
      company: "Company",
      position: "President",
      website: "http://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description...",
      highlights: ["Started the company"],
    },
  ],
  education: [
    {
      site: 'Cypress 1',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      studyDegree: 'Cypress, Degree/Certificate',
      isVisible: true,
    },
  ],
  certification: [
    {
      issuedBy: 'Cypress 1/Cert Name',
      id: '#12345',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      isVisible: true,
    },
  ],
  technicalSkills: [
    {
      category: 'Cypress Languages',
      keywords: [
        {
          name: 'e2e',
          level: 3,
        },
      ],
      isVisible: true,
    },
  ],
  projects: [
    {
      name: 'Cypress 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      link: 'http://website.com',
      teamBrief: '1-person project',
      details: [
        'Detail 1',
      ],
      isVisible: true,
    },
  ],
};

const editorStatus = {
  waiting: {
    label: 'waiting for changes',
    color: 'blue',
  },
  invalid: {
    label: 'invalid json',
    color: 'red',
  },
  valid: {
    label: 'code updated',
    color: 'green',
  },
};

context('Code Editor', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('should replace default data', () => {
    cy.get('div.json-resume-tool button').contains('Code Editor').click();

    // Check editor status is waiting
    cy.get('div.left.item').last().should('contain', editorStatus.waiting.label);
    cy.get('div.ui.segment').should('have.class', editorStatus.waiting.color);

    const jsonEditedText = JSON.stringify(jsonEdited);
    cy.get('#json-resume-editor textarea').clear({ force: true });

    // Check editor status is invalid json
    cy.get('div.left.item').last().should('contain', editorStatus.invalid.label);
    cy.get('div.ui.segment').should('have.class', editorStatus.invalid.color);

    cy.get('#json-resume-editor textarea')
      .clear({ force: true });

    cy.get('#json-resume-editor textarea')
      .invoke('val', jsonEditedText, { force: true })
      .trigger('input', { force: true, bubbles: true });

    // Check editor status is valid json
    cy.get('div.left.item').last().should('contain', editorStatus.valid.label);
    cy.get('div.ui.segment').should('have.class', editorStatus.valid.color);

    cy.get('.very > .massive > .right').click({ force: true });
    cy.get('[data-testid=Email] > a').should('contain', jsonEdited.header.email);
    cy.get('[data-testid=Phone] > a').should('contain', jsonEdited.header.phone);
    cy.get('[data-testid=Website] > a').should('contain', jsonEdited.header.website);
    cy.get('[data-testid=Address]').should('contain', jsonEdited.header.address);
    cy.get('[data-testid=Education] > ul > li').first().should('contain', jsonEdited.education[0].site);
    cy.get('[data-testid=Experience] > ul > li').first().should('contain', jsonEdited.experience[0].company);
  });
});
