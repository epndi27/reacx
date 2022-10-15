import React from "react";
import "./RightSide.css";
import { Icon } from '@iconify/react';
import { Menu} from '@mantine/core';
import { IconUserCircle, IconSettings,IconLogout } from '@tabler/icons';
import {Link, useHistory} from "react-router-dom";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Menu shadow="md" width={200}>
          <Link to={'/'}>
            <Icon icon="ant-design:home-filled" color="#7a77ff" width="28" height="28" />
          </Link>

          <Link to={'/'}>
            <Icon icon="majesticons:door-exit" color="#7a77ff" height="28" />
          </Link>

          <Menu.Target>
            <Icon icon="pajamas:profile" color="#7a77ff" height="28" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Link to={'/forum/profile'}>
              <Menu.Item icon={<IconUserCircle  size={14} />}>Profile</Menu.Item>
            </Link>
            <Menu.Item icon={<IconSettings size={14} />}>Setting</Menu.Item>

            <Menu.Divider />
            <Menu.Item color="red" icon={<IconLogout size={14} />}>Log out my account</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

    </div>
  );
};

export default RightSide;
