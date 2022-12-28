import React from 'react';
import s from './Logo.module.scss';
import { LogoIrit } from '../../../images';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';

type LogoProps = {};

export const Logo: React.FC<LogoProps> = () => {
	return (
		<NavLink to={ROUTES.MAIN} className={s.logo}>
			<img src={LogoIrit} alt="logo" className={s.logo} />
		</NavLink>
	);
};
