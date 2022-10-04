const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){

    },
    baseUrl: "http://81.25.225.140:8181/api",
    env: {
      "arcade_id": "2",
      "arcade_number": "50",
      "logo": "/img/Logo=Proxima.svg",
      "gid": "15",
      "body": "",
      "game": "",
      "denomination": "0.10"
  }
  },
});
