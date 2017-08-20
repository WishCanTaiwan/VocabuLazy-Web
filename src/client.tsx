// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// App
import App from './client/app';
// Styles
import 'semantic-ui-css/semantic.min.css';

const render = (Component: typeof App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./client/app', () => render(App));
}