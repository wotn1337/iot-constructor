import React from 'react';
import { Id } from '../../../../common/types';
import { Image } from 'antd';
import s from './TypeCard.module.scss';

type TypeCardProps = {
	id: Id;
	icon: string;
	title: string;
	selected: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const TypeCard: React.FC<TypeCardProps> = ({ icon, title, selected, onClick }) => {
	return (
		<div className={`${s.card} ${selected ? s.selected : ''}`} onClick={onClick}>
			<Image src={icon} preview={false} className={s.card__icon} />
			<span className={s.card__title}>{title}</span>
		</div>
	);
};
