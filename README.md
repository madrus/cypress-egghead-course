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

## Get started

All you have to do to get started is:

```bash
rm package-lock.json
yarn install
```

Personally, I also like to upgrade to new versions of the dependencies.

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
