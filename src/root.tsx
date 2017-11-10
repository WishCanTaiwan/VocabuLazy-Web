// Node Modules
import React from 'react';

export default class Root extends React.Component<any, any> {
  constructor() {
    super();
  }

  public componentWillMount() {
    console.log('123');
  }

  public render() {
    return (
      <div>
        <span>123456s</span>
      </div>
    );
  }
}
