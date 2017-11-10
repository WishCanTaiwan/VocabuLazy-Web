// Node Modules
import React from 'react';
// import { Provider, Store } from 'react-redux';
// import { Switch, Redirect } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { ConnectedRouter } from 'react-router-redux';
// Styles
// import theme from 'styles/theme';
// import theme from '../styles/theme';
// Containers
// import App from '../containers/app';

// const APPLICATION_INIT = 'APPLICATION_INIT';

// interface IRootProps {
//   store: Store<any>;
//   routes: any[];
//   history: any;
// }

// export default class Root extends React.Component<IRootProps, any> {
//   constructor() {
//     super();
//   }

//   componentWillMount() {
//     const { store } = this.props;
//     store.dispatch({ type: APPLICATION_INIT });
//   }

//   render() {
//     const { store, history, routes } = this.props;
//     const routerProps = { history };
//     return (
//       <Provider store={store} key={Math.random()}>
//         <ThemeProvider theme={theme}>
//           <ConnectedRouter {...routerProps} key={Math.random()}>
//             <App routes={routes}>
//               <Switch>
//                 <Redirect to='/' />
//               </Switch>
//             </App>
//           </ConnectedRouter>
//         </ThemeProvider>
//       </Provider>
//     );
//   }
// }

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
