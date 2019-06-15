/// <reference types="Cypress" />

describe('Todo Application', () => {
  it('loads the home page', () => {
    cy.visit('/')
    cy
      .get('.todo-list li:nth-child(1)')
      .should('have.text', 'Hello world')
      .should('not.have.class', 'completed')
      .find('.toggle')
      .should('not.be.checked')
    cy
      .get('.todo-list li:nth-child(2)')
      .should('have.text', 'Goodnight moon')
      .should('have.class', 'completed')
      .find('.toggle')
      .should('be.checked')
  })
})
