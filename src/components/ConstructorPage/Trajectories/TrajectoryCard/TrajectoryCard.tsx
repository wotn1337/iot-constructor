import React from 'react';
import { Trajectory } from '../../../../common/types';
import { Col, Row } from 'antd';
import s from './TrajectoryCard.module.scss';
import { setSelectedTrajectory, useConstructorContext } from '../../Context';

type TrajectoryCardProps = Trajectory;

export const TrajectoryCard: React.FC<TrajectoryCardProps> = ({ id, title, icons }) => {
	const {
		state: { selectedTrajectory },
		dispatch
	} = useConstructorContext();
	return (
		<Row
			align='middle'
			justify='space-between'
			className={`${s.trackCard} ${selectedTrajectory === id ? s.selected : ''}`}
			wrap={false}
			onClick={() => dispatch(setSelectedTrajectory(id))}
		>
			<Col className={s.title}>{title}</Col>
			<Col>
				<img src={icons[0]} className={s.trajectoryIcon} alt={title} />
			</Col>
		</Row>
	);
};
