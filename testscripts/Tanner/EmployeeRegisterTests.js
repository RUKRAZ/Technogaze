const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function EmployeeRegisterLoginLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/employee_register');
      let expectedURL="http://localhost:3000/employee_login";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/form/div[5]/a/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
EmployeeRegisterLoginLinkTest();