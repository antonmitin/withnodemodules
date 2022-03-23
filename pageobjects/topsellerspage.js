const { By, until } = require('selenium-webdriver');
let Basepage = require('../pageobjects/basepage');
const utils = require('./utils');

class Topsellerspage extends Basepage{
     xpathOfHeader = "//*[contains(@class,'pageheader full')]";
     xpathOfCheckBoxOS = "//*[contains(@data-loc,'SteamOS + Linux')]//*[@class='tab_filter_control_checkbox']";
     xpathOfCheckBoxSelected = "//span[contains(@class,'checked')]";
     xpathOfCheckBoxNumberPlayersTab = "//*[contains(text(),'Narrow by number of players')]";
     xpathOfCheckBoxNumberPlayers = "//*[contains(@data-loc,'LAN Co-op')]//span[@class='tab_filter_control_checkbox']";   
     idCheckBoxTagInput = "TagSuggest";
     xpathOfCheckBoxTag = "//div[@data-loc='Action']//span[@class='tab_filter_control_checkbox']";
     xpathOfGameName = "//*[@class='responsive_search_name_combined'][1]//*[@class='title']";
     xpathOfGameDate = "//*[@class='responsive_search_name_combined'][1]//*[@class='col search_released responsive_secondrow']";
     xpathOfGamePrice = "//*[@class='responsive_search_name_combined'][1]//*[@class='col search_price  responsive_secondrow']";
     xpathOfTopGame = "//*[@class='responsive_search_name_combined'][1]"; 
     xpathOfNumbersOfGames = "//div[@class='search_results_count']";
     idGamesResult = "search_resultsRows";

    async isTosellersPage(){       
        return await this.driver.findElement(By.xpath(this.xpathOfHeader)).isDisplayed();        
    }

    async clckCheckBoxOS(){
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfCheckBoxOS)), 5000).click();        
    }
      
    async isSelectedCheckBoxOs() {        
        return await this.driver.findElement(By.xpath(this.xpathOfCheckBoxSelected)).isDisplayed();   
    }

    async clckCheckBoxNumberPlayers(){        
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfCheckBoxNumberPlayersTab)), 5000).click();
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfCheckBoxNumberPlayers)), 5000).click();
    }

    async isSelectedCheckBoxNumberPlayers() {        
        return await this.driver.findElement(By.xpath(this.xpathOfCheckBoxNumberPlayers)).isDisplayed();    
    }

    async clckCheckBoxTag(){        
        await this.driver.findElement(By.id(this.idCheckBoxTagInput)).sendKeys("Action");
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfCheckBoxTag)), 9000).click();        
    }

    async isSelectedCheckBoxTag() {        
        return this.driver.findElement(By.xpath(this.xpathOfCheckBoxTag)).isDisplayed();      
    }
    
    async getGameName(){
       return await utils.getTextFromElement(this.xpathOfGameName);
    }

    async getGameDate(){
        return await utils.getTextFromElement(this.xpathOfGameDate);     
    }

    async getGamePrice(){
        return await utils.getTextFromElement(this.xpathOfGamePrice);
    }

    async getNumbersOfGames(){
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfNumbersOfGames)), 15000);
        return await utils.getNumber(await utils.getTextFromElement(this.xpathOfNumbersOfGames));
    }

    async getGamesList(){
      await utils.getArray(this.idGamesResult);
    }

    async clckOnTopGame(){
        await this.driver.wait(until.elementLocated(By.xpath(this.xpathOfTopGame)), 9000).click();  
    }

}

module.exports = new Topsellerspage();