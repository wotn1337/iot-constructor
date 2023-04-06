import React from 'react';
import s from './TitleWithLogo.module.scss';

type TitleWithLogoProps = {
	title: string | undefined;
	logo: string | undefined;
};

export const TitleWithLogo: React.FC<TitleWithLogoProps> = ({ title, logo }) => {
	return (
		<div className={s.wrapper}>
			<h3>{title}</h3>
			<img src={logo} className={s.image} alt="logo" />
		</div>
	);
};
