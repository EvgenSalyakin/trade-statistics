import axios from "axios";
//const { createHmac } = await import("crypto");
//const crypto = require("crypto");
//const qs = require("qs");
//import createHmac from "crypto";
// import hmacSHA256 from "crypto-js/hmac-sha256";
// import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

//axios.defaults.baseURL = "https://api.binance.com/api/v3/";
//const baseURL = "https://api.binance.com/api/v3/";
const baseURL = "https://api.binance.com/";

export const coinPriceAPI = async (symbolParam) => {
  const symbol = symbolParam + "USDT";
  const {
    data: { price },
  } = await axios("ticker/price", {
    baseURL,
    params: { symbol },
  });

  return price;
};

// const buildSign = (data, apiSecret) => {
//   let dataQueryString = 'recvWindow=60000&timestamp=' + Date.now()

//   const strData =
//     "recvWindow=" + data.recvWindow + "&timestamp=" + data.timestamp;
//   //const hashDigest = sha256(JSON.stringify(data));
//   console.log(strData);
//   const hmacDigest = Base64.stringify(hmacSHA256(strData, apiSecret));
//   console.log(hmacDigest);
//   // const hmacDigest = Base64.stringify(
//   //   hmacSHA256(JSON.stringify(data), apiSecret)
//   // );
//   return hmacDigest;
//   //return createHmac("sha256", apiSecret).update(data).digest("hex");
// };

const buildSign = (data, apiSecret) => {
  let signature = CryptoJS.HmacSHA256(data, apiSecret).toString(
    CryptoJS.enc.Hex
  );
  return signature;
};

export const balanceAPI = async (api, apiSecret) => {
  const data = {
    recvWindow: 40000,
    timestamp: Date.now(),
  };

  let dataQueryString =
    "recvWindow=" + data.recvWindow + "&timestamp=" + data.timestamp;
  console.log(dataQueryString);
  const signature = buildSign(dataQueryString, apiSecret);
  console.log(signature);
  console.log(api);
  // const requestConfig = {
  //   method: "GET",
  //   baseURL,
  //   url:
  //     baseURL + "balance" + "?" + dataQueryString + "&signature=" + signature,
  //   headers: {
  //     Authorization: `X-MBX-APIKEY: ${api}`,
  //   },
  // };

  //   response.setHeader("Access-Control-Allow-Origin", "*");
  // response.setHeader("Access-Control-Allow-Credentials", "true");
  // response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  // const response = await axios(requestConfig);
  //const response = await axios("sapi/v1/asset/wallet/balance", {
  const response = await axios("api/v3/account", {
    headers: {
      "X-MBX-APIKEY": api,
    },
    method: "GET",
    baseURL,
    params: {
      recvWindow: data.recvWindow,
      timestamp: data.timestamp,
      signature,
    },
  })
    .then((res) => {
      console.log("res: " + JSON.stringify(res));
    })
    .catch((error) => {
      console.error(error);
      console.log("error: " + JSON.stringify(error));
    });
  //console.log(response);
  return response;
};
