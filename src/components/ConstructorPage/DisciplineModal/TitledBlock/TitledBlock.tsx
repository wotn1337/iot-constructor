import React from 'react';
import { Space, Typography } from 'antd';
import s from './TitledBlock.module.scss';

type TitledBlockProps = {
	title: string;
	children: React.ReactNode;
};

export const TitledBlock: React.FC<TitledBlockProps> = ({ title, children }) => {
	return (
		<Space direction="vertical" size={16}>
			<Typography.Text className={s.title}>{title}</Typography.Text>
			<div>{children}</div>
		</Space>
	);
};
