import React, { useContext } from 'react';
import { StatisticKey, Trajectory } from '../../../../common/types';
import { Col, Row } from 'antd';
import s from './TrajectoryCard.module.scss';
import { setSelectedTrajectory, useConstructorContext } from '../../Context';
import { StatisticContext } from '../../../../providers/StatisticProvider';

type TrajectoryCardProps = Trajectory;

export const TrajectoryCard: React.FC<TrajectoryCardProps> = ({ id, title, icons }) => {
	const {
		state: { selectedTrajectory, selectedDirection },
		dispatch,
	} = useConstructorContext();
	const { addEvent } = useContext(StatisticContext);

	return (
		<Row
			align="middle"
			justify="space-between"
			className={`${s.trackCard} ${selectedTrajectory === id ? s.selected : ''}`}
			wrap={false}
			onClick={() => {
				dispatch(setSelectedTrajectory(id));
				addEvent(id, StatisticKey.PT, 'click_in_list', selectedDirection);
			}}
		>
			<Col className={s.title}>{title}</Col>
			<Col>
				<img src={icons[0]} className={s.trajectoryIcon} alt={title} />
			</Col>
		</Row>
	);
};
