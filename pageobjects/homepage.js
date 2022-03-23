const { By, until } = require('selenium-webdriver');
const Basepage = require('../pageobjects/basepage');

class Homepage extends Basepage {
    xpathOfHeader = "//*[contains(text(),'Featured & Recommended')]";
    xpathOfAboutBtn = "//div[@class='supernav_container']//*[@href='https://store.steampowered.com/about/?snr=1_4_4__global-header']";
    idNoteworthyTab = "noteworthy_tab";
    xpathOfTopSellersTab = "//*[@id='noteworthy_flyout']/div/a[1]";

    async isSteamPage() { 
       return await this.driver.findElement(By.xpath(this.xpathOfHeader)).isDisplayed();
    }

    async clckAboutBtn() {
        await this.driver.findElement(By.xpath(this.xpathOfAboutBtn)).click();
    }

    async clckOnNewAndNoteworthyTab() {
        await this.driver.findElement(By.id(this.idNoteworthyTab)).click();
    }

    async clckTopSellers() {
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfTopSellersTab)), 5000).click();
    }
}

module.exports = new Homepage();