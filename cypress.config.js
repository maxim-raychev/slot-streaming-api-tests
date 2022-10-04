const { defineConfig } = require("cypress");

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  
  const pathToConfigFile = path.resolve(__dirname, 'cypress/config', `${file}.json`)

  // check if path is correct
  if (pathToConfigFile.split("/").slice(-1) !== 'config'){
    return fs.readJson(pathToConfigFile + 'cypress/config')
  }

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
