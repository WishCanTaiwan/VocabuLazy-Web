import React from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

/* tslint:disable:no-empty-interface */
interface ILandingProps { }
interface ILandingState {
  activeItem?: string;
}

export default class Landing extends React.Component<ILandingProps, ILandingState> {
  constructor() {
    super();
    this.state = {};
  }

  handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='forum'
          active={activeItem === 'forum'}
          onClick={this.handleItemClick}
          style={{'background-color': 'green'}}
        >
          學習論壇
        </Menu.Item>

        <Menu.Item
          name='vocabulary'
          active={activeItem === 'vocabulary'}
          onClick={this.handleItemClick}
        >
          發燒單字
        </Menu.Item>

        <Menu.Item
          name='note'
          active={activeItem === 'note'}
          onClick={this.handleItemClick}
        >
          我的筆記
        </Menu.Item>

        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          登入
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          註冊
        </Menu.Item>
      </Menu>
    );
  }
}