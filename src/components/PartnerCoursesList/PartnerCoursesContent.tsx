import React from 'react';
import { PartnerCourseCard } from './CourseCard/PartnerCourseCard';
import { PartnerCourseType } from '../../common/types';
import s from './PartnerCoursesContent.module.scss';
import { useMediaQuery } from 'react-responsive';
import { MobilePartnerCourseCard } from './MobileCourseCard/MobilePartnerCourseCard';

type PartnerCoursesContentProps = {
	partnerCourses: PartnerCourseType[];
};

export const PartnerCoursesContent: React.FC<PartnerCoursesContentProps> = ({ partnerCourses }) => {
	const isMobile = useMediaQuery({ maxWidth: 670 });

	return (
		<div className={s.wrapper}>
			{partnerCourses.map((course) =>
				!isMobile ? (
					<PartnerCourseCard course={course} key={course.id} />
				) : (
					<MobilePartnerCourseCard course={course} key={course.id} />
				)
			)}
		</div>
	);
};
