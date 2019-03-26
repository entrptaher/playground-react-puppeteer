import puppeteer from "puppeteer";

async function getTitle({ browserWSEndpoint, url }) {
  // fetch our running browser
  const browser = await puppeteer.connect({
    browserWSEndpoint
  });

  // start the actual automation
  const page = await browser.newPage();
  await page.goto(url);
  const result = await page.title();
  
  // cleanup
  await page.close();
  await browser.close();

  return result;
}

export default getTitle;