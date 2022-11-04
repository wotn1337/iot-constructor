import React from 'react';
import { Id } from '../../../../common/types';
import s from './DirectionCard.module.scss';
import { Space } from 'antd';

export type DirectionCardProps = {
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

export const DirectionCard: React.FC<DirectionCardProps> = ({ name, code, info }) => {
	return (
		<div className={s.card}>
			<div className={s.card__code__wrapper}>
				<div className={s.inner}>
					{code.split('.').map((n, index) => (
						<span key={index} className={s.number}>
							{n}
						</span>
					))}
				</div>
			</div>
			<Space direction="vertical" className={s.card__info}>
				<p className={s.info__title}>{name}</p>
				<Space direction="vertical">
					{info.map((i) => (
						<Space key={i.id}>
							<span>{i.title}</span>
							<span>{i.value}</span>
						</Space>
					))}
				</Space>
			</Space>
		</div>
	);
};
