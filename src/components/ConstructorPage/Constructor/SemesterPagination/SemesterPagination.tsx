import React from 'react';
import { setCurrentSemester, useConstructorContext } from '../../Context';
import { Space } from 'antd';
import { Semester } from '../Semester/Semester';
import s from './SemesterPagination.module.scss';

type SemesterPaginationProps = {
	gap: number;
	height: number;
	width: number;
	fontSize?: number;
	fontNumberSize?: number;
};

export const SemesterPagination: React.FC<SemesterPaginationProps> = ({
	gap,
	height,
	width,
	fontSize,
	fontNumberSize,
}) => {
	const {
		state: { semesters, currentSemester },
		dispatch,
	} = useConstructorContext();

	return (
		<div className={s.pagination}>
			<Space direction="vertical" size={gap}>
				<p className={s.pagination__title} style={{ fontSize }}>
					семестры
				</p>
				{semesters.map((sem) => (
					<Semester
						semester={sem}
						key={sem.id}
						selected={currentSemester === sem.order}
						setCurrentSemester={(order) => dispatch(setCurrentSemester(order))}
						width={width}
						height={height}
						fontNumberSize={fontNumberSize}
					/>
				))}
			</Space>
		</div>
	);
};
