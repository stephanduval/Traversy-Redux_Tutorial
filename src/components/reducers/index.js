//import a function to combine the reducers
import { combineReducers } from 'redux';
import postReducer from '../../actions/postReducer';

export default combineReducers({
    posts: postReducer

});