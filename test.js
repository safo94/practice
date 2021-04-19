const {chromium} = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();