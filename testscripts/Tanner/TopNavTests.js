const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function TopNavHomeLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/about');
      let expectedURL="http://localhost:3000/";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header/div/a[1]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
TopNavHomeLinkTest();

async function TopNavAboutLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/');
      let expectedURL="http://localhost:3000/about";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/div/a[2]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
TopNavAboutLinkTest();

async function TopNavContactLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/');
      let expectedURL="http://localhost:3000/contact";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/div/a[3]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
TopNavContactLinkTest();

async function TopNavPricingLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/');
      let expectedURL="http://localhost:3000/pricing";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/div/a[4]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
TopNavPricingLinkTest();

async function TopNavSignInLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/');
      let expectedURL="http://localhost:3000/login";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/div/a[5]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
TopNavSignInLinkTest();



