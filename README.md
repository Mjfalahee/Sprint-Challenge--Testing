# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps you in the event you ever need to return to old code, for any number of reasons, and improves your project manager's ability to review and assist you with your project.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

`describe()` and `it()` are similar because they are globally injected by jest, but they differ in their use. `describe()` is used to break up tests into separate parts, whether it be separate functions, components, or queries. Describe is used to compartmentalize a suite of tests specific to a particular unit of code. `it()` on the other hand is for implementing a specific test case. The explanation within an `it()` should suit only one aspect of that unit, like testing for a specific status code response from a query, or making sure a number is incrementing properly. 

1. What is the point of `Test Driven Development`? What do you think about this approach?

Test Driven Development is used to be certain we get the results we want from the start. The idea is if you develop tests that fail at first, and then code a unit to pass the test, you'll be able to quickly and efficiently knock out the scope of your project whilst minimizing bugs and refactoring. It's an interesting approach to developing, but I'm not the biggest fan of it. It's useful for projects where you are certain of what you need from the start, but if you are figuring out your schema as you design and implement new ideas, it would lead to more refactoring than simply coding and creating tests to test what you've written.

1. Mention three types of automated tests.

Unit Testing -- focus on a specific function/component/query and verify that the results are what you expect with a specific set of test cases
Integration Testing -- Making sure that multiple units of code are working together properly like React components rendering their children properly
Static Testing -- perhaps the most mundane, and the method we learned first. Checking for simple typos or type issues as the code is written. This is actually largely done by whatever IDE you use as you write code these days.



## Project Set Up

- [ ] Fork and clone this repository.
- [ ] **CD into the folder** where you downloaded the repository.
- [ ] Run `yarn` or `npm i` to download all dependencies.
- [ ] Type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Use `jest` and `supertest` to write the tests.
- [ ] Write the **tests BEFORE** writing the route handlers.
- [ ] Your API must have both `POST` and `GET` endpoints for `/games`.
- [ ] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [ ] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- Validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- Add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - Add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exist return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
