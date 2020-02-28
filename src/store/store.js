import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import videosReducer from './reducers/videos.reducer';

const rootReducer = combineReducers({
  videos: videosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [];

const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();

const logger = createLogger({collapsed: true});

middleware = [...middleware, logger, reduxImmutableStateInvariant];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}
