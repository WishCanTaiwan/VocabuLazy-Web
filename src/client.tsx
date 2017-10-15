// Node Modules
import React from 'react';
// import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
// import { AppContainer } from 'react-hot-loader';
// import { routerMiddleware } from 'react-router-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// Reducer
// import rootReducer from './client/reducers';
// Containers
// import Root from './client/containers/root';
// Styles
// import 'semantic-ui-css/semantic.min.css';

// const basename = '';
// const history = createBrowserHistory({ basename });
// const configureStore = (initialState: any) => {
//   const thunkApplied = applyMiddleware(thunk);
//   const routerMiddlewareApplied = applyMiddleware(routerMiddleware(history));
//   const enhancers = compose(thunkApplied, routerMiddlewareApplied);
//   return createStore(rootReducer, initialState, enhancers);
// };

// const preloadedState = {};
// const store = configureStore(preloadedState);
// const routes = [
//   {
//     path: '/',
//     name: 'Landing',
//     exact: true,
//     title: '首頁'
//   }
// ];

// render(<Root store={store} history={history} routes={routes} />, document.getElementById('root'));
ReactDOM.render(<div />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
