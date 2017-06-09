



import React, { Component } from 'react';
import Header from '../../components/header'

import './main.css'


class SecondaryLayout extends Component {

  render() {

    return (
      <div className="layout">
        <Header/>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default SecondaryLayout;
