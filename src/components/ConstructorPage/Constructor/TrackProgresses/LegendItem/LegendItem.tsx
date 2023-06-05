import React from 'react';
import { Space, Typography } from 'antd';
import './LegendItem.scss';

type LegendItemProps = {
	title: string;
	color: string | undefined;
};

export const LegendItem: React.FC<LegendItemProps> = ({ title, color }) => {
	return (
		<Space size="small">
			<div className="legend__mark" style={{ borderColor: color, backgroundColor: color }} />
			<Typography.Text className="legend__text">{title}</Typography.Text>
		</Space>
	);
};
