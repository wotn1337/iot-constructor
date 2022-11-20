import React from 'react';
import { Progress, Space, Typography } from 'antd';
import './TitledProgress.scss';
import { TrackProgress } from '../../../Context/types';

export const TitledProgress: React.FC<TrackProgress> = ({ title, color, percent }) => {
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
