import React from 'react';
import { Space } from 'antd';
import s from './Score.module.scss';

type ScoreProps = {
	title: string;
	score: number;
};

export const Score: React.FC<ScoreProps> = ({ title, score }) => {
	return (
		<Space className={s.score} size="middle">
			<div className={s.score__table}>{score}</div>
			<span className={s.score__title}>{title}</span>
		</Space>
	);
};
