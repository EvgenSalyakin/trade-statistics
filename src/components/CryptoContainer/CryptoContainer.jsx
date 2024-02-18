import { Component } from "react";
//import { formatDate } from "helpers/format-date";
import {
  BaseTable,
  THead,
  Th,
  Tr,
  Td,
  TBody,
  Avatar,
  Poster,
} from "components";
import {
  getCoinsListAPI,
  getCoinsMarketAPI,
  getSearchTrendingAPI,
} from "api/coingecko";
import { pingBinanceAPI } from "api/binance";

export class CryptoContainer extends Component {
  state = {
    coins: [],
  };

  componentDidMount() {
    this.getTrending();
    //this.getCoinsList();
    //this.getCoinsMarket();
  }

  getTrending = async () => {
    const data = await getSearchTrendingAPI();
    this.setState({ coins: data });
  };

  getCoinsList = async () => {
    const data = await getCoinsListAPI();
    console.log(data);
  };

  getCoinsMarket = async () => {
    const data = await getCoinsMarketAPI();
    console.log(data);
  };

  componentDidUpdate() {}

  render() {
    return (
      <BaseTable>
        <THead>
          <Tr>
            <Th>ID</Th>
            <Th>Icon</Th>
            <Th>Symbol</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Volume</Th>
            <Th>Capital</Th>
            <Th>Line</Th>
          </Tr>
        </THead>

        <TBody>
          {this.state.coins && this.state.coins.length
            ? this.state.coins.map(
                ({
                  id,
                  coin_id,
                  name,
                  symbol,
                  small,
                  data: { price, market_cap, total_volume, sparkline },
                }) => (
                  <Tr key={id}>
                    <Td>{coin_id}</Td>
                    <Td>
                      <Avatar
                        src={small}
                        alt={symbol}
                        style={{ height: "40px", width: "40px" }}
                      />
                    </Td>
                    <Td>{symbol}</Td>
                    <Td>{name}</Td>
                    <Td>{price}</Td>
                    <Td>{market_cap}</Td>
                    <Td>{total_volume}</Td>
                    <Td>
                      <Poster
                        src={sparkline}
                        alt={symbol}
                        style={{ height: "40px", width: "120px" }}
                      />
                    </Td>
                  </Tr>
                )
              )
            : null}
        </TBody>
      </BaseTable>
    );
  }
}
