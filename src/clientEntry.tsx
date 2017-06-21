// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// Components
import App from './client/components/app';

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
    module.hot.accept('./client/components/app', () => render(App));
}