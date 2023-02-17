// cypress/integration/checkboxes.spec.js

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('Marque todos checkboxes com um unico comando', () => {
      cy.get('#check input[type="checkbox"]')
        .as('checkboxes')
        .check()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
    })
  })