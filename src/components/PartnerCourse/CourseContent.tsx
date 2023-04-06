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
				<TitleWithLogo
					title={course?.title}
					logo="https://staging.api.iot.nik-web.ru/storage/2022/12/29/cdd06a410e638db3daf0e7eecdce91120ca6e7de.png"
				/>
				<EducationalPrograms educationPrograms={course?.educationalProgramms} />
				<Description description={course?.description || ''} />
				<VideoPlayer video={course?.video} />
			</Space>
		</div>
	);
};
