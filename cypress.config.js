const { defineConfig } = require("cypress");

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  
  let pathToConfigFile = path.resolve(__dirname, 'cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}


module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'development'
      return getConfigurationByFile(file)
    },
    
  },
});
