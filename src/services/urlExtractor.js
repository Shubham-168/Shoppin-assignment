const cheerio = require("cheerio");
const { PRODUCT_PATTERNS } = require("../utils/config");

const extractProductUrls = (html, baseUrl) => {
  const $ = cheerio.load(html);
  const productUrls = new Set();

  $("a[href]").each((_, element) => {
    let href = $(element).attr("href");
    if (PRODUCT_PATTERNS.test(href)) {
      if (href.startsWith("/")) {
        href = new URL(href, baseUrl).href;
      }
      productUrls.add(href);
    }
  });

  return Array.from(productUrls);
};

module.exports = { extractProductUrls };
