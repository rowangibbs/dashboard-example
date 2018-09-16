import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

        <div id="content-blue" className="example-content" />
        <div id="content-orange" className="example-content" />
        <div id="content-red" className="example-content" />
        <div id="content-green" className="example-content" />

      </div>
    );
  }
}

export default App;
