const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function SideNavUserOverviewLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/contact-signedin');
      let expectedURL="http://localhost:3000/user-dashboard";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/div/nav/a[1]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavUserOverviewLinkTest();

async function SideNavUserAnalyticsLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/contact-signedin');
      let expectedURL="http://localhost:3000/user-dashboard";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/div/nav/a[2]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavUserAnalyticsLinkTest();

async function SideNavContactLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/user-dashboard');
      let expectedURL="http://localhost:3000/contact-signedin";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div/div/nav/a[3]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavContactLinkTest();

async function SideNavProductsLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/user-dashboard');
      let expectedURL="http://localhost:3000/services";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div/div/nav/a[4]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavProductsLinkTest();

async function SideNavAboutLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/user-dashboard');
      let expectedURL="http://localhost:3000/about-signedin";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div/div/nav/a[5]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavAboutLinkTest();

async function SideNavSettingsLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/user-dashboard');
      let expectedURL="http://localhost:3000/profile";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div/div/div/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavSettingsLinkTest();

async function SideNavEmployeeOverviewLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/employee_contact');
      let expectedURL="http://localhost:3000/ems";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/div/nav/a[1]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavEmployeeOverviewLinkTest();

async function SideNavEmployeeAnalyticsLinkTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/employee_contact');
      let expectedURL="http://localhost:3000/ems";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/div/nav/a[2]")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
SideNavEmployeeAnalyticsLinkTest();