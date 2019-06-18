/// <reference types="Cypress" />

describe('Todo Application', () => {
  it('loads the home page', () => {
    cy.server()
    cy
      .route('/api/todos', [
        {
          text: 'Hello world',
          completed: false,
          id: 3,
        },
        {
          text: 'Goodnight moon',
          completed: true,
          id: 5,
        },
      ])
      .as('preload')
    cy.visit('/')
    cy.wait('@preload')

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
