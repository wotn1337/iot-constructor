import React from 'react';
import { Space } from 'antd';
import { PartnerCourseTypeExtended } from '../../common/types';
import s from './CoursesContent.module.scss';
import { EducationalPrograms } from './EducationalPrograms/EducationalPrograms';
import { Description } from './Description/Description';
import { TitleWithLogo } from './TitleWithLogo/TitleWithLogo';
import { VideoPlayer } from './Media/VideoPlayer';

type CourseContentProps = {
	course: PartnerCourseTypeExtended | undefined;
};

export const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
	return (
		<div className={s.wrapper}>
			<Space direction="vertical" size={32}>
				<TitleWithLogo title={course?.title} logo={course?.partner.logo} url={course?.partner.site_link} />
				<EducationalPrograms educationPrograms={course?.educational_programms} />
				<Description description={course?.description} tags={course?.professional_trajectories} />
				<VideoPlayer video={course?.video} />
			</Space>
		</div>
	);
};
