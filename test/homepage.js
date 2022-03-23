const assert = require('chai').assert;
const homepage = require('../pageobjects/homepage');
const aboutpage = require('../pageobjects/aboutpage');
const topsellerspage = require('../pageobjects/topsellerspage');
const topgamepage = require('../pageobjects/topgamepage')
const utils = require('../pageobjects/utils');
const config = require('../config.json')

describe('Tests are starting', async function () {

  beforeEach(async function () {

    //await homepage.initNewDriver(); 
    await homepage.goToUrl(config.baseUrl);
    await homepage.fullScreen();
  })

 // it('Steam test case #1', async function () {
 //   const mainSteamPage = await homepage.isSteamPage();  
//    assert.isTrue(mainSteamPage, 'SteamPage is not opened');
//    await homepage.clckAboutBtn();
//    const isAboutPage = await aboutpage.isAboutPage();
//    assert.isTrue(isAboutPage, 'AboutPage is not opened');
//    const onlinePlayers = await aboutpage.numberOnlinePlayers();
//    const nowPlayers = await aboutpage.numberNowPlayers();
//    assert.isBelow(nowPlayers, onlinePlayers, 'OnlinePlayers less than NowPlayers');  
//    await aboutpage.clckStoreBtn();
//    assert.isTrue(mainSteamPage, 'SteamPage is not opened');
//  })

  it('Steam test case #2', async function () {
    const mainSteamPage = await homepage.isSteamPage();  
    assert.isTrue(mainSteamPage, 'SteamPage is not opened');
    await homepage.clckOnNewAndNoteworthyTab();
    await homepage.clckTopSellers();
    const isTopsellers = await topsellerspage.isTosellersPage();
    assert.isTrue(isTopsellers, 'TopSellersPage is not opened');
    await topsellerspage.clckCheckBoxOS();
    const isCheckBoxOs = await topsellerspage.isSelectedCheckBoxOs();
    assert.isTrue(isCheckBoxOs,'Checkbox OS is not selected');
    await topsellerspage.clckCheckBoxNumberPlayers();
    const isCheckCheckBoxNumberPlayers = await topsellerspage.isSelectedCheckBoxNumberPlayers();
    assert.isTrue(isCheckCheckBoxNumberPlayers, 'Checkbox number players is not selected');
    await topsellerspage.clckCheckBoxTag();
    const isCheckCheckBoxTag = await topsellerspage.isSelectedCheckBoxTag();
    assert.isTrue(isCheckCheckBoxTag, 'Checkbox tag is not selected');   
    const topGameName = await topsellerspage.getGameName();
    const topGameDate = await topsellerspage.getGameDate();
    const topGamePrice = await topsellerspage.getGamePrice();
    const numbersOfGames =  await topsellerspage.getNumbersOfGames();
    const gamesList = await topsellerspage.getGamesList();
    await topsellerspage.clckOnTopGame();
    const isTopGame = await topgamepage.isTopgamePage();
    assert.isTrue(isTopGame, 'TopGamePage is not opened');
  })

  afterEach(async function () {
    await homepage.browserClose();
  })

})