import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { PageRoutes, ROUTES } from '../../../../routes';
import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';

type MobileMenuProps = {};

export const MobileMenu: React.FC<MobileMenuProps> = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	return (
		<>
			<Button
				icon={<MenuOutlined style={{ color: '#1890FF' }} />}
				onClick={() => setOpenMobileMenu(true)}
				className={s.mobileMenu__button}
			/>
			<Drawer placement="right" onClose={() => setOpenMobileMenu(false)} open={openMobileMenu} width={180}>
				<Space direction="vertical">
					{[
						<NavLink
							to={ROUTES.MAIN}
							className={({ isActive }) => `${s.mobileMenu__navlink} ${isActive ? s.active : ''}`}
							key="main"
						>
							Главная
						</NavLink>,
						...PageRoutes.map((item) => (
							<NavLink
								to={item.route}
								className={({ isActive }) => `${s.mobileMenu__navlink} ${isActive ? s.active : ''}`}
								key={item.title}
							>
								{item.title}
							</NavLink>
						)),
						<a
							href="https://forms.gle/ffYJXod5HmRZZHfv5"
							target="_blank"
							rel="noreferrer"
							className={s.mobileMenu__navlink}
							key="review"
						>
							Оставить отзыв
						</a>,
					]}
				</Space>
			</Drawer>
		</>
	);
};
