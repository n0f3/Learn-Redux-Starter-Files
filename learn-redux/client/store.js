import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

// Enabling redux dev tools if present
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// This enables hot loading for reducers
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    // using require because the import syntax is required to be declared
    // at the top of the file
    const nextRootReducer = rquire('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;