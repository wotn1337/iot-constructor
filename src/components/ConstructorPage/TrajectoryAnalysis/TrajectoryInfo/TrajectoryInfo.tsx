import React from 'react';
import { Trajectory } from '../../../../common/types';
import s from './TrajectoryInfo.module.scss';
import { Col, Row } from 'antd';

type TrajectoryInfoProps = Trajectory;

export const TrajectoryInfo: React.FC<TrajectoryInfoProps> = ({
	title,
	description,
	icons,
	disciplines_count,
	vacancies_count,
}) => {
	return (
		<Row className={s.trajectoryInfo} gutter={[32, 32]}>
			<Col span={24}>
				<h2 className={`${s.trajectoryInfo__item} ${s.trajectoryInfo__title}`}>{title}</h2>
			</Col>
			<Col span={16}>
				<div
					className={`${s.trajectoryInfo__item} ${s.trajectoryInfo__description}`}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</Col>
			<Col span={8}>
				<div className={`${s.trajectoryInfo__item} ${s.trajectoryInfo__iconWrapper}`}>
					<img src={icons[0]} alt={title} className={s.iconWrapper__icon} />
				</div>
			</Col>
			<Col span={12}>
				<div className={`${s.trajectoryInfo__item} ${s.trajectoryInfo__statistic}`}>
					<span className={s.statistic__number}>{disciplines_count}</span>
					<span className={s.statistic__title}>Курсов по выбранной траектории</span>
				</div>
			</Col>
			<Col span={12}>
				<div className={`${s.trajectoryInfo__item} ${s.trajectoryInfo__statistic}`}>
					<span className={s.statistic__number}>{vacancies_count}</span>
					<span className={s.statistic__title}>Вакансий на hh.ru</span>
				</div>
			</Col>
		</Row>
	);
};
