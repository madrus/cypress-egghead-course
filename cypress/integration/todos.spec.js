/// <reference types="Cypress" />

describe('Todo Application', () => {
  it('loads the home page', () => {
    cy.visit('/')

    cy.log('about to fetch the element')

    cy.wrap(5).should('eq', 5)

    cy
      .get('[data-cy=todo-item-3]')
      // .then(element => {debugger})
      .debug()
      .should('have.text', 'Hello world')
      .should('not.have.class', 'completed')
      .find('.toggle')
      .should('not.be.checked')

    cy
      .get('[data-cy=todo-item-5]')
      .should('have.text', 'Goodnight moon')
      .should('have.class', 'completed')
      .find('.toggle')
      .should('be.checked')
  })
})
