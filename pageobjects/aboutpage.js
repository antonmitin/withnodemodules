const { By } = require('selenium-webdriver');
const Basepage = require('../pageobjects/basepage');
const utils = require('./utils');

class AboutPage extends Basepage {
    numberOflettersOfOnlinePlayers = 7;
    numberOflettersOfNowPlayers = 12;
    xpathOfSubtitle = "//div[@class='about_subtitle']"; 
    xpathOfOnlinePlayersNumber = "//div[@class='online_stat'][1]";
    xpathOfNowPlayersNumber = "//div[@class='online_stat'][2]";
    xpathOfStoreButton = "//*[contains(text(),'STORE')]";

    async isAboutPage() {
        return await driver.findElement(By.xpath(this.xpathOfSubtitle)).isDisplayed();     
    }
   
    async numberOnlinePlayers(){
        const textOnlinePlayers = await utils.getTextFromElement(this.xpathOfOnlinePlayersNumber); 
        return utils.sliceWithNoLetters(textOnlinePlayers, this.numberOflettersOfOnlinePlayers);  
    }

    async numberNowPlayers(){
        const textNowPlayers = await utils.getTextFromElement(this.xpathOfNowPlayersNumber); 
        return utils.sliceWithNoLetters(textNowPlayers, this.numberOflettersOfNowPlayers);
    }

    async clckStoreBtn() {
        await driver.findElement(By.xpath(this.xpathOfStoreButton)).click();
    }

}

module.exports = new AboutPage();