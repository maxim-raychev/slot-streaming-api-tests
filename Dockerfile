FROM cypress/base
WORKDIR /slot-streaming-api-tests

COPY package.json .
COPY package-lock.json .
COPY cypress.config.js .
COPY cypress .

RUN npm install
<<<<<<< HEAD
RUN ls -la
RUN npx cypress run
=======
RUN npx cypress run
>>>>>>> 6371d194588498cc67ff3c6983d11c39e809224a
