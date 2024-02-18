import { Component } from "react";
import { coinPriceAPI } from "api/binance";

export class CoinInfo extends Component {
  state = {
    coin: "",
    price: 0,
  };

  componentDidMount() {}

  coinPrice = async () => {
    const price = await coinPriceAPI(this.state.coin + "USDT");
    //console.log(price);
    this.setState({ price });
  };

  componentDidUpdate() {}

  handleSubmit = (e) => {
    e.preventDefault();
    this.coinPrice();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="coinName">Name:</label>
        <input
          value={this.state.coin}
          onChange={this.handleChange}
          id="inputCoin"
          aria-describedby="coinHelp"
          type="text"
          name="coin"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$"
          title="Coin name may contain only letters, apostrophe, dash and spaces. For example ETH, BTC"
          required
        />
        <div id="coinHelp">Coin symbol</div>
        <label>Price: ${this.state.price}</label>
        <br />
        <button type="submit" className="btn">
          Get a price
        </button>
      </form>
    );
  }
}
