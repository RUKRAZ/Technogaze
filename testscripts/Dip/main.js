const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get('http://localhost:3000/')


}
loginTest()