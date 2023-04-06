import React from 'react';
import { useParams } from 'react-router-dom';
import { usePartnerCourseByIdQuery } from '../hooks/usePartnerCourseById';
import { Helmet } from 'react-helmet';
import { CourseContent } from '../components/PartnerCourse/CourseContent';
import { Loader } from '../components/common/Loader/Loader';
import { BackgroundWrapper } from '../components/common/BackgroundWrapper/BackgroundWrapper';

export const CoursePage: React.FC = () => {
	const id = useParams();
	const { data: course, isLoading } = usePartnerCourseByIdQuery(id.id ?? 1);

	return (
		<BackgroundWrapper>
			<Helmet>
				<title>{course?.title}</title>
			</Helmet>
			<Loader loading={isLoading}>
				<CourseContent course={course} />
			</Loader>
		</BackgroundWrapper>
	);
};
