import axios from "axios";

//axios.defaults.baseURL = "https://api.coingecko.com/api/v3/";
const baseURL = "https://api.coingecko.com/api/v3/";

export const getSearchTrendingAPI = async () => {
  const {
    data: { coins },
  } = await axios("search/trending", { baseURL });
  const newCoins = coins.map((element) => {
    return { ...element.item };
  });

  return newCoins;
};

export const getCoinsListAPI = async () => {
  const data = await axios("coins/list", { baseURL });

  return data;
};

export const getCoinsMarketAPI = async () => {
  const data = await axios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
    { baseURL }
  );

  return data;
};
