



import React from 'react';
import './style.css';
import editbutton from './editbutton.svg'
import {Link} from 'react-router';
import SearchForm from  './search-form';

class Header extends React.Component{

    render (){
    return (
      <div className="page-header">

        <div className="home">
          <Link to="/" className="homebutton">
            <span className="bigger">Tool</span>Archive
          </Link>
        </div>

        <SearchForm/>

      <div className="edit">
        <button className="editbutton"><img src={editbutton} className="App-logo" alt="edit"/></button>
      </div>

      </div>
    )
  }
}


export default Header;
