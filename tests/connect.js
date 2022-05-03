const browserx = require("puppeteer");

(async () => {
    const browser = await browserx.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
})();