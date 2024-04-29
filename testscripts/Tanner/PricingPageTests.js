const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function PricingHomeLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/pricing');
      let expectedURL="http://localhost:3000/";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/a[1]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
PricingHomeLinkTest();

async function PricingLoginLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/pricing');
      let expectedURL="http://localhost:3000/login";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/a[2]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
PricingLoginLinkTest();