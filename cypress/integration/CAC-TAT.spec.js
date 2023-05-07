// reference types = "Cypress" />

//Session 3
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    // Exercício extra 1
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        cy.get('#firstName').type('Jonas', { delay: 0 })
        cy.get('#lastName').type('Arruda', { delay: 0 })
        cy.get('#email').type('jonas.arruda@outlook.com', { delay: 0 })
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
    // Exercício extra 2
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Jonas', { delay: 0 })
        cy.get('#lastName').type('Arruda', { delay: 0 })
        cy.get('#email').type('jonas.arruda@outlook,com', { delay: 0 }) //email invalido.
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    // Exercício extra 3
    it('campo telefone continua vazio quando preenchido com valor não numérico', function () {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', '')
    })
    // Exercício extra 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Jonas', { delay: 0 })
        cy.get('#lastName').type('Arruda', { delay: 0 })
        cy.get('#email').type('jonas.arruda@outlook.com', { delay: 0 })
        cy.get('#phone-checkbox').check()                                   //trocado o comando .click() por .check()
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    // Exercício extra 5
    it('preenche e limpa os campos nome, sobrenoime, email e telefone', function () {
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        cy.get('#firstName').type('Jonas', { delay: 0 })
            .should('have.value', 'Jonas')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Arruda', { delay: 0 })
            .should('have.value', 'Arruda')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('jonas.arruda@outlook.com', { delay: 0 })
            .should('have.value', 'jonas.arruda@outlook.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('679995555', { delay: 0 })
            .should('have.value', '679995555')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type(longText, { delay: 0 })
            .should('have.value', longText)
            .clear()
            .should('have.value', '')
    })

    //Exercício extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.get('.button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    //Exercício extra 7
    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    //Aula 3 //Session 4

    // Exercício extra 1

    it('seleciona um produto (YouTube) por seu texto', function () {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })

    //Aula 4 //Session5
    //Exercício Extra 1
    it('marca o tipo de atendimento "Feedback"', function () {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })

    it('marca ambos checkboxes, depois desmarca o último', function () {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
    })


//aula 06
    //Fazendo upload de arquivos com Cypress

    it('seleciona um arquivo da pasta fixtures', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    // Simulando upload de arquivos utilizando drag-and-drop

    it('Seleciona um arquivo simulando drag and drop', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    // Instalar o Plugin Cypress Helper pela lojina
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
        cy.fixture('example.json').as('arquivoExemplo')
        cy.get('input[type="file"]')
            .selectFile('@arquivoExemplo')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
        })

/*
 Aula 07 - Lidando com links que abrem em outra aba
 Alternativa 1 - confie que o navegador funciona (teste a aplicação, não o browser)
 Ex:// cy.get('.some-link').should('have.attr', 'target', '_blank')
 Alternativa 2 - remova o atributo target do elemento
 Ex: você pode fazer o seguinte, por exemplo: 
       cy.get('#link-que-abre-em-outra-aba').invoke('removeAttr', 'target')

*/
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() { 
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()
        cy.contains ('Talking About Testing').should('be.visible')
    })


    //Aula 08 - Simulando o viewport de um dispositivo móvel

    it.skip('teste', () => {
    //Skipando um teste       
    });

    //Configurado o nmp Script com o tamanho especifico simulando o acesso ao navegador de um dispositivo Mobile.
    // Execução de testes usando o test runner.


    //Aula 09


//Aula 10 - 
/* Documentação do projeto
Um bom projeto de testes automatizados deve possuir um mínimo de documentação, para que quem está chegando, possa contribuir.

Aqui vai uma lista do que valorizo em uma documentação:

 -  Uma breve descrição do que trata o projeto
 -  Pré-requisitos (tais como Node.js, npm, git, etc.)
 -  Passos para instalação das dependências
 -  Passos para rodar os testes
 -  Qualquer outra informação que for pertinente

 ******* Realizado o ajuste do arquivo READEME.md

*/

//Aula 11 - Integração Contínua (CI) com GitHub Actions


})
