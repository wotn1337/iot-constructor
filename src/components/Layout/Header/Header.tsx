import React from 'react';
import s from './Header.module.scss';
import { Col, Layout as AntdLayout, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { PageRoutes } from '../../../routes';
import { Navbar } from './Navbar/Navbar';

const { Header: AntdHeader } = AntdLayout;

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	return (
		<AntdHeader className={s.header}>
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
		</AntdHeader>
	);
};
