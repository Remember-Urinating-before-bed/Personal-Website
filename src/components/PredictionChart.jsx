import React, { Component } from 'react';
import moment from 'moment';
import '../index.css';
import ChartTool from '../component_tools/ChartTool';
import ToolTip from '../component_tools/ToolTip';
import FetchDataTool from '../component_tools/FetchDataTool';
import { data } from 'autoprefixer';

class PredictionChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }
  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }
  componentDidMount() {
    const getData = () => {
      const url = "https://webpersonalapi.azurewebsites.net";

      fetch(url).then(r => r.json())
        .then((AAPL_stock) => {
          const sortedData = [];
          let count = 30-1;
          let days = 0;
          for (let day_data in AAPL_stock) {
            sortedData.push({
              d: moment(day_data).format('YYYY-MM-DD'),
              p: AAPL_stock[day_data].Close.toLocaleString('us-EN', { style: 'currency', currency: 'USD' }),
              x: days, //previous days
              y: AAPL_stock[day_data].Close, // numerical price
              prediction: AAPL_stock[day_data].Prediction
            });
            count--;
            days++
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
  }
  render() {
    return (
      <div >
        <div name='PredictionChart' className='w-full md:h-screen text-[#484b5b] bg-[#9accdf]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pd-8 sm:pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-500'>
                Prediction ML
              </p>
            </div>
            <div className='row text-2xl'>
              <h1>Prediction of Last 30 Day Apple (AAPL) Stock</h1>
            </div>
            <div className='row'>
              {!this.state.fetchingData ?
                <FetchDataTool data={this.state.data} />
                : null}
            </div>
            <div className='row'>
              <div className='popup'>
                {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint} /> : null}
              </div>
            </div>
            <div className='row'>
              <div className='chart'>
                {!this.state.fetchingData ?
                  <ChartTool data={this.state.data} onChartHover={(a, b) => this.handleChartHover(a, b)} />
                  : null}
              </div>
            </div>
            <div className='row'>
              <div id="coindesk"> Powered by <a href="https://finance.yahoo.com">Yahoo Finance</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PredictionChart;