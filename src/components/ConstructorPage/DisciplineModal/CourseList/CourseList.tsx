import React from 'react';
import { Empty, Space } from 'antd';
import { Course as CourseType } from '../../../../common/types';
import { Course } from './Course/Course';

type CourseListProps = {
	courses: CourseType[] | undefined;
};

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
	return (
		<>
			{courses?.length ? (
				<Space direction="vertical" size={16} style={{ width: '100%' }}>
					{courses?.map((course, index) => (
						<Course key={course.id} number={index + 1} {...course} />
					))}
				</Space>
			) : (
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Упс! Курсов пока что нет" />
			)}
		</>
	);
};
