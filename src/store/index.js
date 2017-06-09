import { compose, createStore } from 'redux';
import projects from './projects.json';
import tools from './tools.json';
import R from 'ramda';

const searchableProps = {
  tools: [ "projects", "developer", "name", "description", "created_on", "language", "readme"],
    projects: []
};


const prepareSearchAbleStrings = (item, index, sourceName) => {
  const string = R.compose(
      R.flatten(),
      R.values(),
      R.pick(searchableProps[sourceName])
  )(item).join(' ').toLowerCase();

      return {
          string,
          index
      }
};

const initialState = {
    projects,
    tools,
    searchables: tools.map((tool,index)=>prepareSearchAbleStrings(tool,index,'tools')),
    searchResults: [],
    searchQuery: null
};


const actions = {
    SEARCH: 'SEARCH',
    SET_SEARCH_RESULT: 'SET_SEARCH_RESULT'
};

function reducer(state = initialState, action){
  switch(action.type){
      case actions.SEARCH:
      return {
          ...state,
          searchQuery: action.payload
      };
      case actions.SET_SEARCH_RESULT:
          return {
              ...state,
              searchResults: action.payload
          };
    default:
      return state;
  }
}

const enhancer =
       compose (
           window.devToolsExtension ? window.devToolsExtension() : f => f,
       );

const store = createStore(reducer, enhancer);

export default store;
