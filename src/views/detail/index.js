

import React from 'react';
import Relatedproj from '../../components/related-projects';
import Detail from '../../components/detail-content';
import {connect} from 'react-redux';
import {toolsWithProjects} from '../../store/selectors';
var styles = {
  display:'flex'
};

class DetailView extends React.Component {

  render() {
    const {tool} = this.props;
    console.log(tool);
    const relatedProjects = tool.projects;
    return (
      <div  className="detail-view-container" style={
    styles}>
        <Detail data={tool}/>
        <Relatedproj projects={relatedProjects}/>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    const {tools} = toolsWithProjects(state);
    const {routeParams} = props;
    console.log(tools);
    const tool = tools.find(tool => tool.slug === routeParams.slug);
    return {
      tool: tool
    }
  }
)(DetailView);
