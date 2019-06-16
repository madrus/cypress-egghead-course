/// <reference types="Cypress" />

describe('Todo Application', () => {
  it('loads the home page', () => {
    cy.visit('/')

    cy
      .get('[data-cy=todo-item-3]')
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
