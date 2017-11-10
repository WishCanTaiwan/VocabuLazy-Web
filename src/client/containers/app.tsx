// Node Modules
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

interface IAppProps {
  routes: any[];
}

export default class App extends React.Component<IAppProps, any> {

  render() {
    const { routes } = this.props;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='logo.png' />
        </Menu.Item>
        {routes.map(({ path, name, exact, title }, i) => (
          <Menu.Item
            key={i}
            as={NavLink}
            link={true}
            to={path}
            name={name}
            exact={exact}
            children={title}
          />
        ))}
      </Menu>
    );
  }
}