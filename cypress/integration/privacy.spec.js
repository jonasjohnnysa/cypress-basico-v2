//Desafio da Aula 07

it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.htm')
    cy.contains ('Talking About Testing').should('be.visible')
});