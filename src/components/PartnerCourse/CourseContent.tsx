import React from 'react';
import { Space } from 'antd';
import { PartnerCourseTypeExtended } from '../../common/types';
import s from './CoursesContent.module.scss';
import { EducationalPrograms } from './EducationalPrograms/EducationalPrograms';
import { Description } from './Description/Description';
import { TitleWithLogo } from './TitleWithLogo/TitleWithLogo';
import { VideoPlayer } from './Media/VideoPlayer';
import { Presentation } from './Media/Presentation/Presentation';

type CourseContentProps = {
	course: PartnerCourseTypeExtended | undefined;
};

export const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
	return (
		<div className={s.wrapper}>
			<Space className={s.wrapperContent} direction="vertical" size={32}>
				<TitleWithLogo
					title={course?.title}
					partner={course?.partner}
					tags={course?.professional_trajectories}
				/>
				<EducationalPrograms educationPrograms={course?.educational_programms} />
				<Description description={course?.description} tags={course?.professional_trajectories} />
				{course?.video && <VideoPlayer video={course.video} />}
				{course?.presentation && <Presentation file={course.presentation} />}
			</Space>
		</div>
	);
};
