import React from 'react';
import { Col } from 'antd';
import s from './Semester.module.scss';
import { Semester as SemesterType } from '../../Context/types';
import { Id } from '../../../../common/types';

type SemesterProps = {
	semester: SemesterType;
	selected: boolean;
	setCurrentSemester: (id: Id) => void;
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
