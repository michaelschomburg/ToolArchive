


import React from 'react';
import Tools from '../../components/tools';
import {connect} from 'react-redux';
import {toolsWithProjects} from '../../store/selectors';

class Landing extends React.Component {

  render() {

    const tools = this.props.tools;
    const toolsByYear = {};

    tools.forEach(tool => {
       const date = tool.created_on;
       const year = parseInt(date.split("-")[0]);
       if(!toolsByYear[year]){
          toolsByYear[year] = [];
       }
       toolsByYear[year].push(tool);
    });

    console.log('toolsByYear', toolsByYear);


    return (
        <Tools data={toolsByYear}/>
    );
  }
}

export default connect(toolsWithProjects)(Landing);
