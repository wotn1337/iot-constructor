import React, { useEffect, useState } from 'react';
import { Col, Progress, Row, Space } from 'antd';
import './Constructor.scss';
import { Button } from '../../common/Button/Button';
import { Semester } from './Semester/Semester';
import { TrackPicker } from './TrackPicker/TrackPicker';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Loader } from '../../common/Loader/Loader';
import { useProfessionalTrajectories } from '../../../hooks/useProfessionalTrajectories';
import { Id } from '../../../common/types';
import { setCurrentSemester, setSemesters, setTracks, useConstructorContext } from '../Context';
import { TrackProgresses } from './TrackProgresses/TrackProgresses';

type ConstructorProps = {
	selectedDirection: Id;
};

export const Constructor: React.FC<ConstructorProps> = ({ selectedDirection }) => {
	const {
		state: { semesters, currentSemester, tracks },
		dispatch,
	} = useConstructorContext();
	const [percent, setPercent] = useState(40);
	const { trajectories } = useProfessionalTrajectories();
	let { modules, loading, semesters: semestersFromBack } = useEducationalModules(selectedDirection, currentSemester);

	useEffect(() => {
		const finishedSemesters = semesters.filter((sem) => sem.finish).length;
		setPercent(finishedSemesters * (100 / 8));
	}, [semesters]);

	useEffect(() => {
		dispatch(
			setTracks(
				trajectories.map((track) => ({
					...track,
					points: 0,
					percent: 0,
				}))
			)
		);
	}, [trajectories]);

	useEffect(() => {
		if (semesters.length === 0) {
			dispatch(setSemesters(semestersFromBack));
		}
	}, [semestersFromBack]);

	return (
		<div className="constructor">
			<Loader loading={loading}>
				<Progress
					percent={percent}
					strokeWidth={30}
					strokeLinecap="butt"
					strokeColor={{
						'0%': '#0975D9',
						'100%': '#18C8FF',
					}}
					trailColor="#D9D9D9"
					status="active"
				/>

				<div className="constructor__middle">
					<div className="constructor__middle__pagination">
						<Space direction="vertical" size={16}>
							<p className="title">семестры</p>
							{semesters.map((sem) => (
								<Semester
									semester={sem}
									key={sem.id}
									selected={currentSemester === sem.order}
									setCurrentSemester={(order) => dispatch(setCurrentSemester(order))}
								/>
							))}
						</Space>
					</div>
					<div className="picker">
						<TrackPicker modules={modules} />
					</div>
					<div className="score">
						<div className="score__title">Мои траектории</div>
						<TrackProgresses tracks={tracks} />
					</div>
				</div>

				<Row gutter={20}>
					<Col>
						<Button type="primary" disabled={percent !== 100} style={{ width: 392, height: 47 }}>
							Создать траекторию
						</Button>
					</Col>
				</Row>
			</Loader>
		</div>
	);
};
