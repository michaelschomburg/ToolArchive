

import React from 'react';
import './style.css';
import {Link} from 'react-router';


class Tools extends React.Component{

  state = {
    toolName: ""
  };

  componentWillMount(){
    const data = this.props.data;
    const years = Object.keys(data).sort().reverse();

    this.toolGroups = years.map(year => {
      const tools = data[year];
      const images = tools.map(tool => {
        console.log(tool);
        console.log(tool.projects[0]);
        const project = tool.projects[Math.floor(Math.random()*tool.projects.length)];
        if(!project){
          console.warn('tool', tool, 'has no projects linked');
          return null;
        }
        const imageSrc = project.media[Math.floor(Math.random()*project.media.length)].filepath;
        const divStyle = {
          backgroundImage: `url("/media/${imageSrc}")`
        }
        return (
          <Link key={tool.slug} to={`/tools/${tool.slug}`}>
            <div style={divStyle} onMouseEnter={() => this.showToolName(tool.name)}
              onMouseLeave={this.hideToolName}
              className="tools"
              />
          </Link>
        );
      });

      return (
        <div key={year} className="tool-group">
          <div className="year">
            {year}
          </div>
          <div className="tool-content">
            {images}
          </div>
        </div>
      );
    });
  }

  showToolName = (toolName) => {
    this.setState({
      toolName
    });
  }

  hideToolName = (toolName) => {
    this.setState({
      toolName: ""
    })
  }


  render(){

    const data = this.props.data;
    const years = Object.keys(data).sort().reverse();

    return (
      <div className="content-container">
        <div className="tool-group-header">
          {this.state.toolName}
        </div>
        <div className="tools-container">
          {this.toolGroups}
        </div>
      </div>
    )
  }
}


export default Tools;
