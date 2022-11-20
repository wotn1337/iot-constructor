import React from 'react';
import { Space } from 'antd';
import { Course as CourseType } from '../../../../common/types';
import { Course } from './Course/Course';

type CourseListProps = {
	courses: CourseType[];
};

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
	return (
		<Space direction="vertical" size={16}>
			{courses.map((course, index) => (
				<Course key={course.id} number={index + 1} {...course} />
			))}
		</Space>
	);
};
