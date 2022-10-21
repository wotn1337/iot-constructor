import React from 'react';
import { Space } from 'antd';
import s from './StetisticItem.module.scss';

type StatisticItemProps = {
	amount: string | number;
	caption: string;
};

export const StatisticItem: React.FC<StatisticItemProps> = ({ amount, caption }) => {
	return (
		<Space className={s.statistic} direction="vertical">
			<span className={s.statistic__amount}>{amount}</span>
			<span className={s.statistic__caption}>{caption}</span>
		</Space>
	);
};
