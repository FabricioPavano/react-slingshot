// Set up your root reducer here...
import { routerReducer} from 'react-router-redux'; //uncomment to add routing
import { combineReducers } from 'redux';
import example from './example'

const rootReducer = combineReducers({
  routing: routerReducer,
  exampleReducer: example
});

export default rootReducer;
