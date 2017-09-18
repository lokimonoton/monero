const puppeteer = require('puppeteer');
// const argv = require('yargs')
(async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  await page.goto('https://c9.io/login');
await page.waitFor(10000)
  await page.click("#id-username")
  await page.waitFor(10000)
  await console.log("username")
  await page.type("slafe1@yandex.com")
  await page.waitFor(10000)
  await page.click("#id-password")
await console.log("password")
  await page.waitFor(10000)
  await page.type("plokotoklucu")
  await page.waitFor(10000)
await page.click("#wrapper-main > article > section > div > section > form > fieldset > div.wrap > button")
await console.log("sign in")
await page.waitFor(10000)
await page.goto('https://ide.c9.io/kolotibablo/kolotibabjo');
await console.log("masuk kolotibabjo")
  // await page.waitFor(50000)
  // await page.goto('https://c9.io/kolotibablo');
  // await page.waitFor(5000)
  // await page.click("#header > nav > button")
  // await browser.close()
})();
