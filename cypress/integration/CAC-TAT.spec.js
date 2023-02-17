/// <reference types="Cypress" />

describe ('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')       
    })

})
