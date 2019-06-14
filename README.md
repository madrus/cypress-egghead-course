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
