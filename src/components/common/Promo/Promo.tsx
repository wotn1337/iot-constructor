import React from 'react';
import s from './Promo.module.scss';
import { useMediaQuery } from 'react-responsive';

type PromoProps = {
	title: string;
	image: string;
	content: React.ReactNode;
	hideImageOnMobile?: boolean;
};

export const Promo: React.FC<PromoProps> = ({ content, image, title, hideImageOnMobile }) => {
	const isMobile = useMediaQuery({ maxWidth: 821 });

	return (
		<div className={s.promo}>
			<h3 className={s.promo__title}>{title}</h3>
			{!(isMobile && hideImageOnMobile) && <img src={image} alt="promo" className={s.promo__image} />}
			{content}
		</div>
	);
};
