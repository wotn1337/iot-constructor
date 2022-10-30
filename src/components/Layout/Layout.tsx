import React from 'react';
import { Col, Layout as AntdLayout, Row } from 'antd';
import s from './Layout.module.scss';
import { Navbar } from './Header/Navbar/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { PageRoutes } from '../../routes';
import { Footer } from './Footer/Footer';

const { Header } = AntdLayout;

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<AntdLayout className={s.layout}>
			<Header className={s.header}>
				<Row justify="space-between" align="middle" className={s.header__inner}>
					<Col>
						<NavLink to={PageRoutes.MAIN}>
							<div className={s.logo} />
						</NavLink>
					</Col>
					<Col>
						<Navbar
							items={[
								{
									label: <NavLink to={PageRoutes.CONSTRUCTOR}>Конструктор</NavLink>,
									key: PageRoutes.CONSTRUCTOR,
								},
								{
									label: <NavLink to={PageRoutes.PROFESSIONS}>Профессии</NavLink>,
									key: PageRoutes.PROFESSIONS,
								},
								{
									label: <NavLink to={PageRoutes.EMPLOYEES}>Сотрудники</NavLink>,
									key: PageRoutes.EMPLOYEES,
								},
								{
									label: <NavLink to={PageRoutes.PARTNERS}>Партнеры</NavLink>,
									key: PageRoutes.PARTNERS,
								},
							]}
						/>
					</Col>
				</Row>
			</Header>
			<Outlet />
			<Footer />
		</AntdLayout>
	);
};
