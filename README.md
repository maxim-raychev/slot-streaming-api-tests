# slot-streaming-api-tests
API tests for slot streaming platform

## Running Slot Streaming API Tests

Follow these steps to run API tests locally:

1. Clone this repository locally
2. Change directory: `cd slot-streaming-api-tests`
3. Run `npm install`
4. Run `npm test` to run all the test suites on Development environment

To start test suites on production environment run `npm run test-prod`

To run chosen test suite run `npx cypress open`, choose test and run it visually

## Running tests in Docker container

To start test suites on development environment inside Docker container:
 - Run `docker-compose up`