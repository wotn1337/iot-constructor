import React from 'react';
import s from './Header.module.scss';
import { Col, Layout as AntdLayout, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { PageRoutes } from '../../../routes';
import { Navbar } from './Navbar/Navbar';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Logo } from '../../common/Logo/Logo';

const { Header: AntdHeader } = AntdLayout;

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	const isDesktop = useMediaQuery({ minWidth: 1062 });

	return (
		<AntdHeader className={s.header}>
			<Row justify="space-between" align="middle" className={s.header__inner}>
				<Col>
					<Logo />
				</Col>
				<Col>
					{isDesktop ? (
						<Navbar
							items={[
								...PageRoutes.map((item) => ({
									label: <NavLink to={item.route}>{item.title}</NavLink>,
									key: item.route,
								})),
								{
									label: (
										<a href="https://forms.gle/ffYJXod5HmRZZHfv5" target="_blank" rel="noreferrer">
											Оставить отзыв
										</a>
									),
									key: 'review',
								},
							]}
						/>
					) : (
						<MobileMenu />
					)}
				</Col>
			</Row>
		</AntdHeader>
	);
};
