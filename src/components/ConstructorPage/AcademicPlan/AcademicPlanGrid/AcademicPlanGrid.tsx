import React from 'react';
import { Col, Row } from 'antd';
import { Semester } from './Semester/Semester';
import { Semester as SemesterType } from '../types';
import s from './AcademicPlanGrid.module.scss';

type AcademicPlanGridProps = {
	semesters: SemesterType[];
	showDefault: boolean;
	ref: React.Ref<any>;
};

export const AcademicPlanGrid: React.FC<AcademicPlanGridProps> = React.forwardRef(({ semesters, showDefault }, ref) => {
	return (
		<Row gutter={[20, 32]} ref={ref} className={s.academicPlanGrid}>
			{semesters.map((semester) => (
				<Col span={6} lg={6} md={8} sm={12} xs={24} key={semester.id}>
					<Semester semesterTitle={semester.name} lists={semester.lists} showDefault={showDefault} />
				</Col>
			))}
		</Row>
	);
});
