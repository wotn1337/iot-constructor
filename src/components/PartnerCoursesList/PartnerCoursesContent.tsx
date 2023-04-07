import React from 'react';
import { PartnerCourseCard } from './CourseCard/PartnerCourseCard';
import { PartnerCourseType } from '../../common/types';
import s from './PartnerCoursesContent.module.scss';

type PartnerCoursesContentProps = {
	partnerCourses: PartnerCourseType[];
};

export const PartnerCoursesContent: React.FC<PartnerCoursesContentProps> = ({ partnerCourses }) => {
	return (
		<div className={s.wrapper}>
			{partnerCourses.map((course) => (
				<PartnerCourseCard course={course} key={course.id} />
			))}
		</div>
	);
};
