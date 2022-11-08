import React, { useState } from 'react';
import { Col, Progress, Row, Space } from 'antd';
import './Constructor.scss';
import { Button } from '../../common/Button/Button';
import { Semester } from './Semester/Semester';
import { Score } from './Score/Score';
import { TrackPicker } from './TrackPicker/TrackPicker';

type ConstructorProps = {};

export type SemesterType = {
	id: number;
	name: string;
	disabled?: boolean;
	finish: boolean;
};

export const Constructor: React.FC<ConstructorProps> = ({ ...props }) => {
	const [percent, setPercent] = useState(40);
	const [semesters, setSemesters] = useState<SemesterType[]>([
		{
			id: 0,
			name: '1',
			disabled: true,
			finish: false,
		},
		{
			id: 1,
			name: '2',
			disabled: true,
			finish: false,
		},
		{
			id: 2,
			name: '3',
			finish: false,
		},
		{
			id: 3,
			name: '4',
			finish: false,
		},
		{
			id: 4,
			name: '5',
			finish: false,
		},
		{
			id: 5,
			name: '6',
			finish: false,
		},
		{
			id: 6,
			name: '7',
			finish: false,
		},
		{
			id: 7,
			name: '8',
			finish: false,
		},
	]);
	const [currentSemester, setCurrentSemester] = useState(2);
	const tracks = [
		{ name: 'Frontend', points: 4 },
		{ name: 'Frontend', points: 0 },
		{ name: 'Frontend', points: 13 },
		{ name: 'Frontend', points: 6 },
		{ name: 'Frontend', points: 1 },
		{ name: 'Frontend', points: 2 },
		{ name: 'Frontend', points: 1 },
		{ name: 'Frontend', points: 7 },
		{ name: 'Frontend', points: 0 },
		{ name: 'Frontend', points: 20 },
		{ name: 'Frontend', points: 3 },
		{ name: 'Frontend', points: 0 },
		{ name: 'Frontend', points: 11 },
	];

	return (
		<div className="constructor">
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
						{tracks.map((track, index) => (
							<Score title={track.name} score={track.points} key={index} />
						))}
					</Space>
				</Col>
				<Col className="picker">
					<TrackPicker />
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
		</div>
	);
};
