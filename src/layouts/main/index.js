

import React, { Component } from 'react';
import Header from '../../components/header'
import ProjectNav from '../../components/project-nav'
import './main.css';


class MainLayout extends Component {

  render() {
    return (
      <div className="layout">
        <Header/>
        <div className="content">
            {this.props.children}
            <ProjectNav/>
        </div>
      </div>
    );
  }
}

export default MainLayout;
