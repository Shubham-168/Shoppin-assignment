const { fetchHtml } = require("./htmlFetcher");
const { extractProductUrls } = require("./urlExtractor");
const logger = require("../utils/logger");

const crawlDomain = async (domain) => {
  const baseUrl = `https://${domain}`;
  logger.info(`Crawling ${baseUrl}`);

  const homepageHtml = await fetchHtml(baseUrl);
  if (!homepageHtml) {
    logger.error(`Failed to load homepage for ${domain}`);
    return [];
  }

  const productUrls = extractProductUrls(homepageHtml, baseUrl);
  logger.info(`Found ${productUrls.length} product URLs on ${domain}`);
  return productUrls;
};

const crawlDomains = async (domains) => {
  const results = {};

  const crawlPromises = domains.map(async (domain) => {
    results[domain] = await crawlDomain(domain);
  });

  await Promise.all(crawlPromises);
  return results;
};

module.exports = { crawlDomain, crawlDomains };
