import React from 'react';
import { Space } from 'antd';
import s from './TitledList.module.scss';

type TitledListProps = {
	title: string;
	items: React.ReactNode[];
	titleGap?: number;
	itemsGap?: number;
};

export const TitledList: React.FC<TitledListProps> = ({ title, items, titleGap, itemsGap }) => {
	return (
		<Space direction="vertical" size={titleGap ?? 20} className={s.title}>
			<p className={s.title}>{title}</p>
			<Space direction="vertical" size={itemsGap ?? 16}>
				{items}
			</Space>
		</Space>
	);
};
