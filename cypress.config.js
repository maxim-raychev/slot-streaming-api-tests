const { defineConfig } = require("cypress");

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  
  let pathToConfigFile = path.resolve(__dirname, 'cypress/config', `${file}.json`)
  
  // check if path is correct
  const myArray = pathToConfigFile.split("/")
  const lastDir = myArray.slice(-1)
  if (lastDir !== 'config'){
    pathToConfigFile = pathToConfigFile + 'cypress/config'
    console.log(pathToConfigFile)
  }

  console.log(pathToConfigFile)

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
