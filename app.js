require("dotenv").config();

const htmlparser2 = require("htmlparser2");
const axios = require("axios");
const axiosConfig = require("./axiosConfig");

let prevAd = null;

// requests the data and returns the whole finn.no dom (built by next.js)
const fetchData = () => {
  return axios(axiosConfig)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// Parses the dom and returns latest ad
const extractLatestAd = (data) => {
  let latestAd;
  const parser = new htmlparser2.Parser({
    ontext(text) {
      if (["docs", "props"].every((keyWord) => text.includes(keyWord))) {
        const parsedText = JSON.parse(text);
        latestAd = parsedText?.props?.pageProps?.search?.docs[0];
      }
    },
  });
  parser.write(data);
  return latestAd;
};

// checks if two ads are the same
const isNewAd = (adX, adY) => {
  console.log(adX, adY);
  if (!adX || !adY) return false;
  return adX.ad_id !== adY.ad_id;
};

const handleNewAd = (ad) => {
  console.log(ad.heading);
  console.log(ad.price.amount);
};

setInterval(() => {
  fetchData().then((data) => {
    const latestAd = extractLatestAd(data);
    if (isNewAd(latestAd, prevAd)) {
      handleNewAd(latestAd);
    }
    prevAd = latestAd;
  });
}, 3000);

console.info("Application up and running");
