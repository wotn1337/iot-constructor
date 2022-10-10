import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

type NavbarProps = {
	items: MenuProps['items'];
};

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
	return <Menu mode="horizontal" items={items} />;
};
