import React from 'react';
import { Id } from '../../../../common/types';
import s from './DirectionCard.module.scss';
import { Space } from 'antd';

export type Direction = {
	id: Id;
	code: string;
	name: string;
	info: Info[];
};

type Info = {
	id: Id;
	title: string;
	value: string | number;
};

type DirectionCardProps = Direction & {
	selected: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const DirectionCard: React.FC<DirectionCardProps> = ({ name, code, info, selected, onClick }) => {
	return (
		<div className={`${s.card} ${selected ? s.selected : ''}`} onClick={onClick}>
			<div className={s.card__code__wrapper}>
				<div className={s.inner}>
					{code.split('.').map((n, index) => (
						<span key={`code-part-${index}`} className={s.number}>
							{n}
						</span>
					))}
				</div>
			</div>
			<Space direction="vertical" size={24} className={s.card__info}>
				<p className={s.info__title}>{name}</p>
				<Space direction="vertical" size={8} className={s.info__list}>
					{info.map((i, index) => (
						<Space key={`info-part-${i.id}-${index}`} size={16}>
							<span className={s.item__title}>{i.title}</span>
							<span>{i.value}</span>
						</Space>
					))}
				</Space>
			</Space>
		</div>
	);
};
