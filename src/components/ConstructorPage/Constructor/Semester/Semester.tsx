import React from 'react';
import { Col } from 'antd';
import { SemesterType } from '../Constructor';
import s from './Semester.module.scss';

type SemesterProps = {
	semester: SemesterType;
	selected: boolean;
	setCurrentSemester: (id: number) => void;
};

export const Semester: React.FC<SemesterProps> = ({ semester, selected, setCurrentSemester }) => {
	return (
		<Col>
			<button
				className={`${s.semester} ${selected ? s.selected : ''} ${semester.finish ? s.finish : ''}`}
				disabled={semester.disabled ?? false}
				key={semester.id}
				onClick={(e) => {
					e.preventDefault();
					setCurrentSemester(semester.id);
				}}
			>
				{semester.name}
			</button>
		</Col>
	);
};
