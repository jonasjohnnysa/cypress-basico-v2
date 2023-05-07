#  Cypress-basico-v2

Este projeto é uma cópia do repositório do curso Cypress básico aplicado pelo [Walmir Filho](https://walmyr.dev) da escola [Talking About Testing](https://talkingabouttesting.com/).

## Pré-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

> Eu usei as versões `v16.13.2` do Node.js e `8.3.2` do npm. Sugiro que utilize as mesmas versões ou versão superiores a fim de garantir a compatibilidade.

## Instalação

Dentro da pasta do projeto execute o comando `npm install` (ou `npm i` sendo a versão reduzida do comando) para instalar as dependências do projeto através da tag devDependencies do arquivo [package.json](./package.json).

## Executando Testes

Você pode executar os testes simulando o acesso por um  navegador desktop ou um navegador de um disposiivo móvel.

## Desktop

Dentro da pasta do projeto execute o comando `npm test`, (ou `npm t` versão a reduzida do comando) para excutar o teste no modo headless, ou seja no modo não interativo.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo com a visualização de navegadores desktop.

## Mobile

Execute o comando `npm test:mobile` para rodar o teste no modo headless com a a visualização de navegadores do tipo mobile.

Ou, execute `npm run cy:open:mobile` para abrir o Cypress no interativo com a visualização de navegadores mobile.

## Ajude a apoiar um amigo.

Se você quer apoiar este projeto, deixe uma ⭐. E deixe uma ⭐ também no Projeto do professor.


___
### Agradecimentos
Obrigado a mim mesmo. Por dedicar esse tempo ao apredizado. E obrigado ao professor Walmir por compartilhar o seu conhecimento com a comunidade de QA. :globe_with_meridians: