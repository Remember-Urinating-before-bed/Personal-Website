import React, { Component } from 'react';
import moment from 'moment';
import '../index.css';

class FetchDataTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null
    }
  }
  componentDidMount(){
    this.getData = () => {
      const {data} = this.props;
      const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&outputsize=compact&apikey=37YHGXG63ZRVCM6P';

      fetch(url).then(r => r.json())
        .then((AAPLdata) => {
          var test = AAPLdata
          const price = Object.values(test['Time Series (1min)'])[0]["4. close"];
          const change = price - data[0].y;
          const changeP = (price - data[0].y) / data[0].y * 100;

          this.setState({
            currentPrice: Object.values(test['Time Series (1min)'])[0]["4. close"],
            monthChangeD: change.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
            monthChangeP: changeP.toFixed(2) + '%',
            updatedAt: Object.keys(test['Time Series (1min)'])[0]
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.getData();
    this.refresh = setInterval(() => this.getData(), 150000);
  }
  componentWillUnmount(){
    clearInterval(this.refresh);
  }
  render(){
    return (
      <div id="data-container">
        { this.state.currentPrice ?
          <div id="left" className='box'>
            <div className="heading">{this.state.currentPrice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}</div>
            <div className="subtext">{'Price Updated ' + moment(this.state.updatedAt ).fromNow()}</div>
          </div>
        : null}
        { this.state.currentPrice ?
          <div id="middle" className='box'>
            <div className="heading">{this.state.monthChangeD}</div>
            <div className="subtext">Change Since Last 30 Days (USD)</div>
          </div>
        : null}
          <div id="right" className='box'>
            <div className="heading">{this.state.monthChangeP}</div>
            <div className="subtext">Change Since Last 30 Days (%)</div>
          </div>

      </div>
    );
  }
}

export default FetchDataTool;