import React from 'react';
import './Navbar.scss';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useCurrentPage } from '../../../../hooks';

type NavbarProps = {
	items: MenuProps['items'];
};

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
	const currentPage = useCurrentPage();

	return <Menu mode="horizontal" items={items} selectedKeys={[currentPage]} className="navbar" />;
};
