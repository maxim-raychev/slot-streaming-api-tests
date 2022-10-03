FROM cypress/base
WORKDIR /slot-streaming-api-tests

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npx cypress run
