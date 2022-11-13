import React from 'react';
import { Col, Row } from 'antd';
import { Id } from '../../../../common/types';
import { Semester } from './Semester/Semester';

type AcademicPlanGridProps = {
	semesters: {
		id: Id;
		number: number;
		lists: {
			id: Id;
			title: string;
			type: 'default' | 'primary';
			items: string[];
		}[];
	}[];
};

export const AcademicPlanGrid: React.FC<AcademicPlanGridProps> = ({ semesters }) => {
	return (
		<Row gutter={[20, 32]}>
			{semesters.map((semester) => (
				<Col span={6}>
					<Semester key={semester.id} semesterTitle={`${semester.number} семестр`} lists={semester.lists} />
				</Col>
			))}
		</Row>
	);
};
