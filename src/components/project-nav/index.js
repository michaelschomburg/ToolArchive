

import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import {Link} from 'react-router';



class ProjectNav extends React.Component {



  render(){
    const {projects, searchResults}= this.props;

    const projectLinks = projects
        .filter(project => project.title !== undefined)
        .map(project => {
          return (
            <Link to={`/search/${project.pid}`}
                  key={project.title}
                  className={(searchResults||[]).indexOf(project.pid)>-1&&'highlighted'}
            >
                {project.title}

            </Link>

          );
        })
        .sort().reverse();

    return(
      <div className="projectlist-container">

        <div className="projectlist-header">

          <div>Lust Projects</div>

          </div>

          <div>
            <ul className="projectnames">
              {projectLinks}
            </ul>
          </div>
      </div>

    );
  }
}

export default connect(state => {
  return {
      projects: state.projects,
      searchResults: state.searchResults
  }
})(ProjectNav);
