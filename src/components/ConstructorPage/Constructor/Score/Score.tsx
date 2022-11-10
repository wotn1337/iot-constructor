import React from 'react';
import { Space } from 'antd';
import s from './Score.module.scss';
import { Trajectory } from '../../../../common/types';

type ScoreProps = {
	track: Trajectory;
	score: number | string;
};

export const Score: React.FC<ScoreProps> = ({ track, score }) => {
	return (
		<Space className={s.score} size="middle">
			<div className={s.score__table} style={{ color: track.color }}>
				{score}
			</div>
			<span className={s.score__title}>{track.title}</span>
		</Space>
	);
};
