const { defineConfig } = require("cypress");

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  
  const pathToConfigFile = path.resolve('../slot-streaming-api-tests/cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'development'
      return getConfigurationByFile(file)
    },
  },
});
