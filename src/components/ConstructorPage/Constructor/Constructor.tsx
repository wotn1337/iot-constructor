import React, { useState } from 'react';
import { Col, Progress, Row, Space } from 'antd';
import './Constructor.scss';
import { Button } from '../../common/Button/Button';
import { Semester } from './Semester/Semester';
import { Score } from './Score/Score';
import { TrackPicker } from './TrackPicker/TrackPicker';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Loader } from '../../common/Loader/Loader';
import { useProfessionalTrajectories } from '../../../hooks/useProfessionalTrajectories';
import { Id } from '../../../common/types';
import { setCurrentSemester, useConstructorContext } from '../Context';

type ConstructorProps = {
	selectedDirection: Id;
};

export const Constructor: React.FC<ConstructorProps> = ({ selectedDirection }) => {
	const {
		state: { semesters, currentSemester },
		dispatch,
	} = useConstructorContext();
	const [percent, setPercent] = useState(40);
	const { trajectories } = useProfessionalTrajectories();
	let { modules, loading } = useEducationalModules(selectedDirection, currentSemester);

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

				<Row gutter={20} className="constructor__middle">
					<Col className="picker">
						<TrackPicker modules={modules} />
					</Col>
					<Col className="score">
						<div className="score__title">Мои треки</div>
						<Space size="small" direction="vertical">
							{trajectories.map((track) => (
								<Score track={track} score={+track.id} key={track.id} />
							))}
						</Space>
					</Col>
				</Row>

				<Row gutter={20}>
					<Col>
						<Button
							type="primary"
							text="Создать траекторию"
							disabled={percent !== 100}
							style={{ width: 392, height: 47 }}
						/>
					</Col>
					{semesters.map((sem) => (
						<Semester
							semester={sem}
							key={sem.id}
							selected={currentSemester === sem.id}
							setCurrentSemester={(id) => dispatch(setCurrentSemester(id))}
						/>
					))}
				</Row>
			</Loader>
		</div>
	);
};
