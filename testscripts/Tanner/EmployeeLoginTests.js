const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function EmployeeSignUpLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/employee_login');
      let expectedURL="http://localhost:3000/employee_register";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/form/div[4]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
EmployeeSignUpLinkTest();

async function EmployeeUserLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/employee_login');
      let expectedURL="http://localhost:3000/login";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/form/div[4]/div/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
EmployeeUserLinkTest();