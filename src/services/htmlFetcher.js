const axios = require("axios");
const logger = require("../utils/logger");

const fetchHtml = async (url) => {
  try {
    const response = await axios.get(url, { timeout: 10000 });
    return response.data;
  } catch (error) {
    logger.error(`Failed to fetch ${url}: ${error.message}`);
    return null;
  }
};

module.exports = { fetchHtml };
