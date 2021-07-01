import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import rootReducer from './reducers';  // since the file is index.js- that part is is implied

const initialState = {};
const middleware = [thunk];
//The famous createStore function:!!!

// we use the spread uperator to create a copy of the middleware array
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
    );

export default store;