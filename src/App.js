import React, { Component } from 'react';
import './App.css';
import { LineChart, Line } from 'recharts';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis,  MarkSeries,
  Hint} from 'react-vis';


const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];

const timestamp = new Date('September 9 2017').getTime();

const timeStamps = [
  new Date('September 9 2017').getTime(),
  new Date('September 13 2017').getTime(),
  new Date('September 20 2017').getTime(),
  new Date('September 29 2017').getTime(),
  new Date('October 9 2017').getTime(),

]
const MSEC_DAILY = 86400000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({value});
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  autoScroll = (color) => {
    let yVal;
    switch (color) {
      case 'blue':
        window.scroll( 0, 200 );
        break;
      case 'orange':
        window.scroll( 0, 850 );
        break;
      case 'red':
        window.scroll( 0, 1500 );
        break;
      case 'green':
        window.scroll( 0, 2200 );
        break;
      default:
        break;
    }
    
  }

  render() {
    return (
      <div id="dashboard">
        <div id="header-flex-parent">
          <div className="header-flex-element card-teal">
           <div className="element-flex-body">
            <div className="online-image"></div>
            <div className="body-text">ONLINE!</div>
           </div>
           <div className="element-flex-footer">
            <span className="footer-text">Connection Status</span>
            <button onClick={()=> this.autoScroll('blue')}>scroll</button>
           </div>
          </div>
          <div className="header-flex-element card-avocado">
          <div className="element-flex-body"></div>
           <div className="element-flex-footer">
           <button onClick={()=> this.autoScroll('orange')}>scroll</button>
           </div>
          
          </div>
          <div className="header-flex-element card-tangerine">
          <div className="element-flex-body"></div>
           <div className="element-flex-footer">
           <button onClick={()=> this.autoScroll('red')}>scroll</button>
           </div>
          </div>
          <div className="header-flex-element card-orchid">
            <div className="element-flex-body"></div>
           <div className="element-flex-footer">
           <button onClick={()=> this.autoScroll('green')}>scroll</button>
           </div>
          </div>
        </div>

        <div id="content-blue" className="example-content">
        <XYPlot
        xType="time"
        width={300}
        height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          data={[
            {x: timeStamps[0], y: 3},
            {x: timeStamps[1], y: 5},
            {x: timeStamps[2], y: 15},
            {x: timeStamps[3], y: 12}
          ]}/>
           <MarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          data={[
            {x: timeStamps[0], y: 3},
            {x: timeStamps[1], y: 5},
            {x: timeStamps[2], y: 15},
            {x: timeStamps[3], y: 12}
          ]}
        />

          {this.state.value ? <Hint value={this.state.value} /> : null}
      </XYPlot>
        </div>
        <div id="content-orange" className="example-content">
        <XYPlot height={300} width= {300}>
          <LineSeries data={data} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
        </XYPlot>
        </div>
        <div id="content-red" className="example-content">
        <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          data={data}
        />
        {this.state.value ? <Hint value={this.state.value} /> : null}
      </XYPlot>
        
        
        </div>
        <div id="content-green" className="example-content" />

      </div>
    );
  }
}

export default App;
