const webdriver = require('selenium-webdriver');
const config = require('../config.json')

class Driver{

    driver = null;

    constructor() {
        this.get();
    }

    initNewDriver() {
        const chromeCapabilities = webdriver.Capabilities.chrome();
        const chromeOptions = { 'args': ['--test-type', '--incognito', '--lang=en'] };
        chromeCapabilities.set('chromeOptions', chromeOptions);
        const driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
        driver.manage().setTimeouts({ implicit: config.implicit });
        this.driver = driver;
        //global.driver = driver;
      }

      get(){
          if(this.driver === null){
              this.initNewDriver();
          } 
          return this.driver;
      }
}

module.exports = Driver;