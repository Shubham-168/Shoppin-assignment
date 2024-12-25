const { crawlDomains } = require("./services/crawler");

const main = async () => {
  const domains = ["flipkart.com", "blinkit.com", "amazon.in"];

  console.log("Starting web crawler...");
  const results = await crawlDomains(domains);
  console.log("Crawling results:", JSON.stringify(results, null, 2));
};

main().catch((error) => {
  console.error("An error occurred:", error);
});
