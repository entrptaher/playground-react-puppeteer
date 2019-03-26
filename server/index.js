const puppeteer = require("puppeteer");
const http = require("http");
const httpProxy = require("http-proxy");
const proxy = new httpProxy.createProxyServer();
const port = 4000;

http
  .createServer()
  .on("upgrade", async (req, socket, head) => {
    const browser = await puppeteer.launch({ headless: false });
    const target = browser.wsEndpoint();

    proxy.ws(req, socket, head, { target });
  })
  .listen(port, function() {
    console.log(`proxy server running at ${port}`);
  });
