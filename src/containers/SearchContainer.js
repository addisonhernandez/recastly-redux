import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const SearchContainer = connect(
  (stateStub) => { return {}; },
  (dispatch) => {
    return {
      handleSearchInputChange: (query) => {
        dispatch(handleSearchChange(query));
      }
    };
  }
)(Search);

export default SearchContainer;
