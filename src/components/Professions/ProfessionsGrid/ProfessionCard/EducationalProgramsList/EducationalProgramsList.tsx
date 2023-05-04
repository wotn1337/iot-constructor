import React from 'react';
import { Space } from 'antd';
import { EducationalProgram } from '../../../../../common/types';
import s from './EducationalProgramsList.module.scss';
import { useMediaQuery } from 'react-responsive';

type EducationalProgramsListProps = {
	educationalPrograms: EducationalProgram[];
};

export const EducationalProgramsList: React.FC<EducationalProgramsListProps> = ({ educationalPrograms }) => {
	const isLarge = useMediaQuery({ minWidth: 1024 });

	return (
		<Space
			direction="horizontal"
			size={isLarge ? 16 : [16, 4]}
			align="center"
			wrap={true}
			className={s.educationalPrograms}
		>
			{educationalPrograms.map((program, index) => (
				<React.Fragment key={program.id}>
					<span className={s.educationalPrograms__programTitle}>{program.title}</span>
					{index !== educationalPrograms.length - 1 && (
						<span className={s.educationalPrograms__dot}>&#x2022;</span>
					)}
				</React.Fragment>
			))}
		</Space>
	);
};
