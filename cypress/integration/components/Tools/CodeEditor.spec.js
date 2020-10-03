/// <reference types="cypress" />

const jsonEdited = {
	"header": {
		"name": "Cypress",
		"email": "cypress@domain.com",
		"phone": "987-654-3210",
		"github": "https://github.com/cypress",
		"linkedin": "https://linkedin.com/in/cypress",
		"address": "123 Cypress Street",
		"website": "https://Cypress.com",
		"city": "Cypress",
		"state": "CY",
		"zip": "99999",
		"country": "FR"
	},
	"experience": [
		{
			"company": "Cypress Corp",
			"city": "Cypress City",
			"state": "FR",
			"position": "Cypress position",
			"dateFrom": "06/08/1997",
			"dateTo": "03/10/2020",
			"primaryWorkBrief": "Brief description of your Cypress tasks.",
			"impact1": "Cypress is awesome 1.",
			"isVisible": true
		}
	],
	"education": [
		{
			"site": "Cypress 1",
			"dateFrom": "XX/XXXX",
			"dateTo": "XX/XXXX",
			"studyDegree": "Cypress, Degree/Certificate",
			"isVisible": true
		}
	],
	"certification": [
		{
			"issuedBy": "Cypress 1/Cert Name",
			"id": "#12345",
			"dateFrom": "XX/XXXX",
			"dateTo": "",
			"isVisible": true
		}
	],
	"technicalSkills": [
		{
			"category": "Cypress Languages",
			"keywords": [
				{
					"name": "e2e",
					"level": 3
				}
			],
			"isVisible": true
		}
	],
	"projects": [
		{
			"name": "Cypress 1",
			"dateFrom": "XX/XXXX",
			"dateTo": "",
			"link": "http://website.com",
			"teamBrief": "1-person project",
			"details": [
				"Detail 1"
			],
			"isVisible": true
		}
	]
}

context('Code Editor', () => {
  beforeEach(() => {
    // visit baseURL (cypress.json)
    cy.visit('/');
  });

  it('should replace default datas', () => {
    cy.get('div.json-resume-tool button').contains('Code Editor').click();

    const jsonEditedText = JSON.stringify(jsonEdited).replace(/{/g, '{{}');
    cy.get("#json-resume-editor .ace_content").type('{selectall}{backspace}' + jsonEditedText);

    cy.get('.very > .massive > .right').click({force: true});

    cy.get('[data-testid=Email] > a').should('contain', jsonEdited.header.email)
    cy.get('[data-testid=Phone] > a').should('contain', jsonEdited.header.phone)
    cy.get('[data-testid=Website] > a').should('contain', jsonEdited.header.website)
    cy.get('[data-testid=Address]').should('contain', jsonEdited.header.address)
    cy.get('[data-testid=Education] > ul > li').first().should('contain', jsonEdited.education[0].site)
    cy.get('[data-testid=Experience] > ul > li').first().should('contain', jsonEdited.experience[0].company)
  });
});


