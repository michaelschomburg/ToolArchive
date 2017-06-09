

import React from 'react';
import './style.css';
import {Link} from 'react-router';

class Search extends React.Component {

  render() {
    const {projects, searchQuery} = this.props;

    const createThumbs = (project, tool, index) => {

        const image = project.media[index];

        const imageStyle = {
            backgroundImage: `url("/media/${image}")`
        };

        return(
            <Link className="result-item" key={tool.slug} to={`/tools/${tool.slug}` }>

                <img style={imageStyle}
                     src={`/media/${image.filepath}`}
                     className="thumbnail-picture"
                     alt="imageoftools"
                />

                <div>{tool.name}</div>

            </Link>
        );
    };


    const createProjectImage = project =>
        project.tools.map( (tool, index) => createThumbs(project, tool, index) );


    return (
      <div className="search-result-container">
          {
              searchQuery&&
              <div className="search-result-header">
                  <div className="result-for">Results for: </div>
                  <div className="result-log">{searchQuery}</div>
              </div>
          }

          <div className="search-results">
          {
              projects?
                  projects.map(createProjectImage)
                  :
                  <span>No result!</span>
          }
          </div>

      </div>
    );
  }
}

export default Search;
