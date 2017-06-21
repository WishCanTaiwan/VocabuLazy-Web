import React from 'react';
// Containers
import Landing from './containers/landing';

/* tslint:disable:no-empty-interface */
interface IAppProps { }
interface IAppState { }

export default class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
    this.state = {};
  }

  componentWillUnmount() {
    this.setState({ aaa: 1 });
  }

  render() {
    return <Landing />;
  }
}