import React from 'react';
import s from './Semester.module.scss';
import { Semester as SemesterType } from '../../Context/types';

type SemesterProps = {
	semester: SemesterType;
	selected: boolean;
	setCurrentSemester: (order: number) => void;
	width: number;
	height: number;
	fontNumberSize?: number;
};

export const Semester: React.FC<SemesterProps> = ({
	semester,
	selected,
	setCurrentSemester,
	width,
	height,
	fontNumberSize,
}) => {
	return (
		<button
			className={`${s.semester} ${selected ? s.selected : ''} ${semester.finish ? s.finish : ''}`}
			disabled={semester.disabled ?? false}
			key={semester.id}
			onClick={(e) => {
				e.preventDefault();
				setCurrentSemester(semester.order);
			}}
			style={{ width, height, fontSize: fontNumberSize }}
		>
			{semester.name}
		</button>
	);
};
