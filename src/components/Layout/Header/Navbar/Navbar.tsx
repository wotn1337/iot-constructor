import React from 'react';
import './Navbar.scss';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

type NavbarProps = {
	items: MenuProps['items'];
};

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
	return <Menu mode="horizontal" items={items} className="navbar" />;
};
