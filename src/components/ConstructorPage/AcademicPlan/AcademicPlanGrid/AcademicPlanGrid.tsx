import React from 'react';
import { Col, Row } from 'antd';
import { Semester } from './Semester/Semester';
import { Semester as SemesterType } from '../types';

type AcademicPlanGridProps = {
	semesters: SemesterType[];
	showDefault: boolean;
};

export const AcademicPlanGrid: React.FC<AcademicPlanGridProps> = ({ semesters, showDefault }) => {
	return (
		<Row gutter={[20, 32]}>
			{semesters.map((semester) => (
				<Col span={6} lg={6} md={8} sm={12} xs={24}>
					<Semester
						key={semester.id}
						semesterTitle={`${semester.name} семестр`}
						lists={semester.lists}
						showDefault={showDefault}
					/>
				</Col>
			))}
		</Row>
	);
};
