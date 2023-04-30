import React from 'react';
import s from './TitleWithLogo.module.scss';
import { useMediaQuery } from 'react-responsive';
import { MobilePartnerInfo } from './Mobile/MobilePartnerInfo';
import { Partner, Trajectory } from '../../../common/types';

type TitleWithLogoProps = {
	title?: string;
	partner?: Partner;
	tags?: Trajectory[];
};

export const TitleWithLogo: React.FC<TitleWithLogoProps> = ({ title, partner, tags }) => {
	const isMobile = useMediaQuery({ maxWidth: 725 });

	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>{title}</h3>
			{!isMobile ? (
				<a href={partner?.site_link} target="_blank">
					<img src={partner?.logo} className={s.image} alt="logo" />
				</a>
			) : (
				<MobilePartnerInfo partner={partner} tags={tags} />
			)}
		</div>
	);
};
