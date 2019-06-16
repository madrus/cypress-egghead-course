# Egghead Cypress Starter App

This application serves as a starting point for lots of my Egghead courses because it's a simple implementation of many modern web technologies.

Link to the repository: <https://github.com/madrus/cypress-egghead-course>

## What's in the box?

A modern full-stack framework intended to help you focus on the frontend part of learning to program:
* Frontend:
  * React (for UI)
  * Redux (for state management)
  * react-scripts (for all the build processes you don't want to worry about -- webpack, babel, etc)
  * Redux Saga (for side-effect management)
* Backend:
  * json-server (Manages all the nitty gritty of an API for us)

---

## Get started

All you have to do to get started is:

```bash
rm package-lock.json
yarn install
```

Personally, I also like to upgrade to new versions of the dependencies.

---

## Lessons 1 through 3

Initialize `gitflow` and create a new feature branch `feature/les1`.

``` bash
yarn add -D cypress
```

Run `cypress` by the following command:

``` bash
$(yarn bin)/cypress open
```

You can also add the following script definition to `package.json` file:

``` json
"cypress": "cypress open"
```

and then run `yarn cypress`.

This will open the Cypress interactive GUI which comes pre-seeded with a number of tests.

As a homework, study all the different tests the GUI runs. Also check `cypress/integration/examples/` folder to see the tests.

All `.spec.js` files have intellisense. It comes with the following directive at the beginning of the file:

``` xml
/// <reference types="Cypress" />
```

If you comment it out, the Cypress intellisense is gone. This works because Cypress installs its type definitions. It can find them both locally and in the global Node.js cache if Cypress is globally installed.

Create a new `tsconfig.json` file inside the `cypress` folder and paste its contents as advised on the [Cypress website](https://docs.cypress.io/guides/tooling/typescript-support.html#Set-up-your-dev-environment). Now, the intellisense will be available with or without the tripple slash directive.

We can also add our custom settings to the `cypress.json` file in the root of the project. In order to have intellisense for the properties, we need to add the following settings to the User Settings of the VS Code editor (type `json.schemas` in the search field):

``` json
"json.schemas": [
  {
    "fileMatch": [
      "cypress.json"
    ],
    "url": "https://on.cypress.io/cypress.schema.json"
  }
],
```

Now, when we hover over properties and values or add a new value in the `cypress.json` file, we get to see all the necessary hints.

---

## Lesson 4

To begin with tests we move the `cypress/integration/examples` folder out of the project (to keep the examples) and create our own test file inside `cypress/integration` folder: `todos.spec.js`. Next we run the application with `yarn start` inside the VSCode and run our Cypress tests by running `yarn cypress` in another terminal.

> It is very important to double check that the inverse assertion of any assertion you make does in fact fail. Like checking that some class is not present on some element. If we choose the wrong element, the assertion will be true but the test useless. One way to make sure is to inverse the assertion again and make sure it fails.

---

## Lesson 5 - Cypress selectors

If we open up `src/components/TodoItem.js`, we can add a `data-cy` attribute. `data-cy` is exclusively used for testing. We can communicate to our teammates that we intend it to be used in a task.

``` jsx
return (
  <li data-cy={`todo-item-${todo.id}`} className={classnames({
    completed: todo.completed,
    editing: this.state.editing
  })}>
    {element}
  </li>
)
```

By using the unique ID of the to-do, we can guarantee that this will have a unique `data-cy` attribute and that it will be easy for us to target regardless of where it is in the DOM or what its implementation is.

In our test we can now point to the necessary time more precisely. In the tests panel click on the little target to open the selector playground. The selector playground will make recommendations as to the best way to target each element. For instance, if we want to target this item, we can click on it and see that it recommends the `[data-cy=todo-item-3]`.

Now in our test instead of

``` js
cy
	.get('.todo-list li:nth-child(1)')
```

we can better write

``` js
cy
  .get('[data-cy=todo-item-3]')
```

---

## Lesson 6 - Debugging and Logging

Cypress code is asynchronous in nature. So, putting the `debugger` statememnt between `cy` statements won't work. We can however include async debugging inside the `cy` statement like so:

``` js
cy
  .get('[data-cy=todo-item-3]')
  .then(element => {debugger})
  .should('have.text', 'Hello world')
  .should('not.have.class', 'completed')
  .find('.toggle')
  .should('not.be.checked')
```

Alternatively, Cypress provides its own `.debug()` method:

``` js
cy
  .get('[data-cy=todo-item-3]')
  .debug()
  .should('have.text', 'Hello world')
  .should('not.have.class', 'completed')
  .find('.toggle')
  .should('not.be.checked')
```

We can also add logging statements like this:

``` js
cy.log('about to fetch the element')
```

or add some extra checks like this:

``` js
const getName = () => {
  return 'Jane Lane'
}

cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane') // true
```

---
