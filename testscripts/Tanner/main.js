/*
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
/*
async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get('http://localhost:3000/')

  "//*[@id=\"root\"]/div[2]/div[2]/a[1]"


}
loginTest()
*/

/*
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

async function RegisterLoginLinkTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try{
    await driver.get('http://localhost:3000/register');
    let expectedURL="http://localhost:3000/login";
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/form/div[6]/a/a")).click();
    let redirectURL=driver.getCurrentUrl();
    assert.strictEqual(redirectURL,expectedURL);
  } finally {
    await driver.quit();
  }
}
RegisterLoginLinkTest();

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


*/