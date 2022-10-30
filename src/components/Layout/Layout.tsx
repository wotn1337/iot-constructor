import React from 'react';
import { Layout as AntdLayout } from 'antd';
import s from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { FooterBlock } from './Footer/Footer';
import { Header } from './Header/Header';

const { Content } = AntdLayout;

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<AntdLayout className={s.layout}>
			<Header />
			<Content className={s.content}>
				<Outlet />
			</Content>
			<FooterBlock />
		</AntdLayout>
	);
};
