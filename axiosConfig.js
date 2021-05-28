// See readme.md for how-to generate axiosConfig

// product_category="2.67.3901.142" --- Hagemøbler
// location=0.20061 --- Oslo
// sort=PUBLISHED_DESC --- sort by published date (newest first)

const axiosConfig = {
  method: "get",
  url: "https://www.finn.no/bap/forsale/search.html?location=0.20061&product_category=2.67.3901.142&search_type=SEARCH_ID_BAP_ALL&sort=PUBLISHED_DESC",
  headers: {
    Connection: "keep-alive",
    "Cache-Control": "max-age=0",
    "sec-ch-ua":
      '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    "sec-ch-ua-mobile": "?0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Accept-Language": "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
    Cookie: process.env.COOKIE,
  },
};

module.exports = axiosConfig;
