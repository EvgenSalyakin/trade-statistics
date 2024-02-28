import { balanceAPI, coinPriceAPI } from "api/binance";
import { Component } from "react";

export class BinanceForm extends Component {
  state = {
    apiKey: "2jEPegip6r3Wt909KbiW4kd8e3qiuxuD7nwnIeYxFZZoxj8qQkbbHNoLq8b9BlIK",
    secretKey:
      "gJIseCPI0cfAFIrYCZNXAJQhUMsQUxMHy9GjivJ6FWrfVJYatiehChr13cCDQ7d3",
    balance: 0,
    isSubmit: false,
  };

  componentDidUpdate(_, prevState) {
    // const { apiKey, secretKey } = this.state;
    // if (prevState.apiKey !== apiKey || prevState.secretKey !== secretKey) {
    //   coinPriceAPI("ETH");
    //   this.setState({isSubmit:false})
    // }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    balanceAPI(this.state.apiKey, this.state.secretKey).then((data) => {
      //console.log(data);
      //this.setState({ balance: data });
    });
    //this.setState({ balance: price });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.apiKey}
          placeholder="Api key"
          name="apiKey"
          required
          autoFocus
        ></input>
        <input
          onChange={this.handleChange}
          value={this.state.secretKey}
          placeholder="Secret key"
          name="secretKey"
          required
        ></input>
        <button type="submit">Recibe balance</button>
        <p>Balance: {this.state.balance}</p>
      </form>
    );
  }
}
