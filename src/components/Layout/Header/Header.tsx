import React from 'react';
import s from './Header.module.scss';
import { Col, Image, Layout as AntdLayout, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { PageRoutes } from '../../../routes';
import { Navbar } from './Navbar/Navbar';
import { LogoIrit } from '../../../images';

const { Header: AntdHeader } = AntdLayout;

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	return (
		<AntdHeader className={s.header}>
			<Row justify="space-between" align="middle" className={s.header__inner}>
				<Col className={s.header__logos}>
					<NavLink to="/">
						<div className={s.logo} />
					</NavLink>
					<NavLink to="/">
						<Image src={LogoIrit} preview={false} />
					</NavLink>
				</Col>
				<Col>
					<Navbar
						items={PageRoutes.map((item) => ({
							label: <NavLink to={item.route}>{item.title}</NavLink>,
							key: item.route,
						}))}
					/>
				</Col>
			</Row>
		</AntdHeader>
	);
};
