import React from 'react';
import { Layout as AntdLayout } from 'antd';
import s from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

const { Content } = AntdLayout;

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<AntdLayout className={s.layout}>
			<Header />
			<Content className={s.content}>
				<Outlet />
			</Content>
			<Footer />
		</AntdLayout>
	);
};
