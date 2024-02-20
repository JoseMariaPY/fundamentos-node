import { launch } from "puppeteer";

(async () => {
  const browser = await launch( { headless: false });
  const page = await browser.newPage();
  console.log('hola')
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var titulo = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML)
    return h1.innerHTML;
  });

  //await page.screenshot({ path: "google.png" });
  console.log('cerrando navegador')
  await browser.close();
})();