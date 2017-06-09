

import React from 'react';
import './style.css';
import Backbutton from './back.svg';
import ReadMore from './react-readmore';
import {browserHistory} from 'react-router';
import ReactMarkdown from 'react-markdown';


class Detail extends React.Component{

  state = {
    expanded: false
  }

  render () {
    const data = this.props.data;
    console.log("data received by detail component:", data);
    console.log("readme:", typeof data.readme);
    const developer = Array.isArray(data.developer) ? data.developer.join(", ") : data.developer;
    const imageSources = [];
    data.projects.forEach(project => {
        project.media.forEach(img => {
            imageSources.push(`/media/${img.filepath}`);
        });
    });

    const images = imageSources.map(src => {
      return <img src={src} className="images" alt="images" />
    });

    return (
        <div className='detail-container'>
          <div className='description-container'>
              <div className="description-header">
                <div className="backbutton-container"><button onClick={browserHistory.goBack}><img src={Backbutton} className="backbutton" alt="backbutton" /></button></div>
              </div>
              <div className="description">
                <h4>Description</h4>
                  <ReadMore minHeight="35px" animation="0.8s ease">
                    <p><ReactMarkdown source={data.readme}/></p>
                  </ReadMore>
            </div>
            <div className="repolink"><a href={data.href} target="_blank">Go to repository</a></div>
          </div>
          <div className='gallery-container'>
            <div className='gallery-header'>

              <ReactMarkdown className="tool-name" source={data.name}/>
              <ReactMarkdown className="dev-name"  source={developer}/>

            </div>
            <div className='gallery'>
              {images}
            </div>
          </div>
      </div>
    );
  }
}

export default Detail;
