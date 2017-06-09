

import React from 'react';
import './style.css';




class Relatedproj extends React.Component{


  render(){


    const {projects} = this.props;
    const projectThumbs = projects.map(project => {
        const imgSrc = `/media/${project.media[0].filepath}`;
        return (
          <div key={project.title} className="Projthumb">
            <h6>{project.title}</h6>
            <a href="https://lust.nl/" target="_blank">
              <img src={imgSrc} className="project-pic" alt="backbutton" />
            </a>
          </div>
        );
    })
    return (

      <div className='related-container'>
        <div className="related-header">
          Related Projects
        </div>
        {projectThumbs}
      </div>


    )
  }
}

export default Relatedproj;
