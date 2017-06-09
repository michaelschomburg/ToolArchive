



import React from 'react';
import Search from '../../components/search';
import {connect} from 'react-redux';
import {projectsWithTools} from '../../store/selectors';

class SearchResults extends React.Component {

  render() {
    const {projects, searchResults, searchQuery} = this.props;
    const {pid} = this.props.routeParams;

    if(pid){
      const project = projects.find(project => project.pid === pid);
      return <Search projects={[project]}/>;
    }

    
    if(searchResults && searchResults.length > 0){
          const matchedProjects =
              projects.filter(project => searchResults.indexOf(project.pid)>-1);

        return <Search projects={matchedProjects}
                       searchQuery={searchQuery}
        />
    }

    return (
        <Search/>
    );
  }
}

const mapStateToProp = state => ({
    projects: projectsWithTools(state),
    searchResults: state.searchResults,
    searchQuery: state.searchQuery
});


const mapDispatchToProps = (dispatch, ownProps) => ({dispatch});

export default connect(mapStateToProp, mapDispatchToProps)(SearchResults);
