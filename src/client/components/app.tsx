import React from 'react';
import ReactDOM from 'react-dom';

/* tslint:disable:no-empty-interface */
interface IAppProps { }
interface IAppState { }

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return <h1 style={{ color: 'green' }}>Hello VocabuLazy!</h1>;
  }
}

export default App;