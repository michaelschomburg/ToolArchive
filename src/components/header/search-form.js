



import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toolsWithProjects} from '../../store/selectors';
import searchbutton from './searchbutton.svg'
import {search, setSearchResult} from '../../store/actions';
import './style.css';
import R from 'ramda';

class Form extends React.Component {

    state = {
        searchQuery: ''
    };

    handleChange = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    handleSubmit = (event) => {

        event.preventDefault();

        const {dispatch, searchables, tools} = this.props;
        const {searchQuery} = this.state;

        if(searchQuery && (searchQuery||"").trim().length){

            const searchQueryRegex = new RegExp( '(?:' + searchQuery.replace(' ','|') + ')', 'gi');

            const matchedProjectIds = R.compose(
                R.uniq,
                R.flatten,
                R.map(item=> tools[item.index].projects.map(p=>p.pid)),
                R.filter(item=>{
                    console.log(searchQuery, ' in ', '   ', item.string)
                    console.log(item.string.match(searchQueryRegex));
                    console.log(item.index)
                    console.log('')
                    return item.string.match(searchQueryRegex);
                })
            )(searchables);




            dispatch(search(searchQuery));
            dispatch(setSearchResult(matchedProjectIds));
            this.props.router.push('/search');

        }else{
            dispatch(search(null));
            dispatch(setSearchResult([]));
        }
    };



    render (){

        const divStyle = {
            backgroundImage: `url("./searchbutton.svg")`
        };

        return (
            <div className="search">
                <form className="searchbar"
                      onSubmit={this.handleSubmit}
                >
                    <div className="icon-container">
                        <button style={divStyle}
                                className="search-icon"
                                alt="edit">
                            <img src={searchbutton}
                                 alt="searchbutton"/>
                        </button>
                    </div>
                    <div>
                        <input href="search"
                               type="text/number"
                               className="search-input"
                               placeholder="Tool, Developer, Description"
                               value={this.state.searchQuery}
                               onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        );
    }

};



const mapDispatchToProps = (dispatch, ownProps) => ({dispatch});

export default connect(state => ({
    searchables: state.searchables,
    tools: toolsWithProjects(state).tools
}), mapDispatchToProps)(withRouter(Form));
