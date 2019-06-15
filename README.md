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

## Lesson 1

Initialize `gitflow` and create a new feature branch `feature/les1`.

``` bash
yarn add -D cypress
```

Merge branch `01-cypress-install` into `feature/les1`.

Run `cypress` by one of the two commands:

``` bash
yarn cypress
$(yarn bin)/cypress open
```

This will open the Cypress interactive GUI which comes pre-seeded with a number of tests.

As a homework, study all the different tests the GUI runs. Also check `cypress/integration/examples/` folder to see the tests.

## Lesson 2

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
