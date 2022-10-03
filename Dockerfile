FROM cypress/base
WORKDIR /slot-streaming-api-tests

COPY package.json .
COPY package-lock.json .
COPY cypress.config.js .
COPY cypress .

RUN npm install
RUN ls -la
RUN npx cypress run