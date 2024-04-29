const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function LoginForgotLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/login');
      let expectedURL="http://localhost:3000/verify-email";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/form/div[3]/div[2]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
LoginForgotLinkTest();

async function LoginRegisterLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/login');
      let expectedURL="http://localhost:3000/register";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
LoginRegisterLinkTest();

async function LoginEmployeeLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/login');
      let expectedURL="http://localhost:3000/employee_login";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
LoginEmployeeLinkTest();