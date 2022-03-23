const { By } = require('selenium-webdriver');
let Basepage = require('./basepage');
const utils = require('./utils');

class Topgamepage extends Basepage {   
    idTopGamePage = "appHubAppName";

    async isTopgamePage(){        
        return await this.driver.findElement(By.id(this.idTopGamePage)).isDisplayed();
    }

}

module.exports = new Topgamepage();