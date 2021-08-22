import React from 'react'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropDown() {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">About</Menu.Item>
      <Menu.Item key="2">Contact</Menu.Item>
      <Menu.Item key="3"></Menu.Item>
    </Menu>
  );
  return (
    <div>
      <DropDown overlay={menu}>
        
      </DropDown>
    </div>
  )
}

export default DropDown

