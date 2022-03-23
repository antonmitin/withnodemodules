const Basepage = require("./basepage");
const { By, until } = require('selenium-webdriver');

class Utils extends Basepage {

     async sliceWithNoLetters(text, numberOfLetters){
        let sliced = await text.slice(numberOfLetters);
        sliced = await sliced.replace(/,/g, '');        
        return Number.parseInt(sliced);
    }

    async getTextFromElement(anyXpath){
        let element = await driver.wait(until.elementLocated(By.xpath(anyXpath)), 15000);
        return element.getText();        
    }  
    
    async getNumber(anyText){
        let text = anyText;
        let sliced = text.substring(0,2);
        console.log(sliced);
        return Number.parseInt(sliced);
    }     
    
    async getArray(xpath){
        let elements = await driver.findElements(By.xpath(xpath));
        for(let e of elements) {
            console.log(e.getArray());
    }

}


}


module.exports = new Utils();