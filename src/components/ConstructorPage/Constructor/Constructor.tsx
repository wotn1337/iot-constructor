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

type ConstructorProps = {
	selectedDirection: Id;
};

export type SemesterType = {
	id: number;
	name: string;
	disabled?: boolean;
	finish: boolean;
};

export const Constructor: React.FC<ConstructorProps> = ({ selectedDirection }) => {
	const [percent, setPercent] = useState(40);
	const { trajectories } = useProfessionalTrajectories();
	const [semesters, setSemesters] = useState<SemesterType[]>([
		{
			id: 1,
			name: '1',
			disabled: true,
			finish: false,
		},
		{
			id: 2,
			name: '2',
			disabled: true,
			finish: false,
		},
		{
			id: 3,
			name: '3',
			finish: false,
		},
		{
			id: 4,
			name: '4',
			finish: false,
		},
		{
			id: 5,
			name: '5',
			finish: false,
		},
		{
			id: 6,
			name: '6',
			finish: false,
		},
		{
			id: 7,
			name: '7',
			finish: false,
		},
		{
			id: 8,
			name: '8',
			finish: false,
		},
	]);
	const [currentSemester, setCurrentSemester] = useState(3);
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
					<Col className="score">
						<div className="score__title">Мои треки</div>
						<Space size="small" direction="vertical">
							{trajectories.map((track) => (
								<Score track={track} score={+track.id} key={track.id} />
							))}
						</Space>
					</Col>
					<Col className="picker">
						<TrackPicker modules={modules} />
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
							setCurrentSemester={setCurrentSemester}
						/>
					))}
				</Row>
			</Loader>
		</div>
	);
};
