import React from 'react';
import s from './TitleWithLogo.module.scss';

type TitleWithLogoProps = {
	title: string | undefined;
	logo: string | undefined;
	url: string | undefined;
};

export const TitleWithLogo: React.FC<TitleWithLogoProps> = ({ title, logo, url }) => {
	return (
		<div className={s.wrapper}>
			<h3>{title}</h3>
			<a href={url} target="_blank">
				<img src={logo} className={s.image} alt="logo" />
			</a>
		</div>
	);
};
