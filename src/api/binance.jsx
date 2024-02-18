import axios from "axios";

//axios.defaults.baseURL = "https://api.binance.com/api/v3/";
const baseURL = "https://api.binance.com/api/v3/";

export const coinPriceAPI = async (symbol) => {
  const {
    data: { price },
  } = await axios("ticker/price", {
    baseURL,
    params: { symbol },
  });

  return price;
};
