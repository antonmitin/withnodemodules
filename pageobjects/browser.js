const webdriver = require('selenium-webdriver');
const config = require('../config.json')
const Driver = require('../pageobjects/driver')

class Browser {

  driver = null;

  constructor() {
    let bla = new Driver;
    this.driver = bla.get();
  }

  async goToUrl(theURL) {
    return await this.driver.get(theURL);
  }

  async fullScreen() {    
    await this.driver.manage().window().maximize();
  }

  browserClose() {
    this.driver.quit();
  }
}

module.exports = Browser;