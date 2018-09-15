import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="dashboard">
        <div id="header-flex-parent">
          <div className="header-flex-element card-teal">
           <div className="element-flex-body">
            <svg className="online-image"></svg>
            <div className="body-text">77</div>
           </div>
           <div className="element-flex-footer">
            <span className="footer-text">Connection Status</span>
           </div>
          </div>
          <div className="header-flex-element card-avocado">
          <div className="element-flex-body"></div>
           <div className="element-flex-footer"></div>
          
          </div>
          <div className="header-flex-element card-tangerine">
          <div className="element-flex-body"></div>
           <div className="element-flex-footer"></div>
          </div>
          <div className="header-flex-element card-orchid">
            <div className="element-flex-body"></div>
           <div className="element-flex-footer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
