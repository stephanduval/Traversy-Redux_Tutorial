// this is where it evaluates any actions committed (for post functions)
import { FETCH_POSTS } from "../../actions/types.js";

// create the initial state
const initialState = {
    items: [],  // all the posts
    items: {}  // the single post we add
}

// the action parameter includes a type that is an object
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
        }
        default: 
        return state;
    } 
}