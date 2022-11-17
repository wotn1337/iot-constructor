import React from 'react';
import { Progress, Space, Typography } from 'antd';
import { Id } from '../../../../../common/types';
import './TitledProgress.scss';

export type TitledProgressProps = {
	id: Id;
	title: string;
	color: React.CSSProperties['color'];
	percent: number;
};

export const TitledProgress: React.FC<TitledProgressProps> = ({ title, color, percent }) => {
	return (
		<Space direction="vertical" size={2} className="progress-wrapper">
			<Typography.Text>{title}</Typography.Text>
			<Progress
				className="progress"
				percent={percent}
				showInfo={false}
				strokeColor={color}
				trailColor="#D9D9D9"
				strokeWidth={11}
			/>
		</Space>
	);
};
