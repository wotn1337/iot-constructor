import React from 'react';
import { Space } from 'antd';
import { EducationalProgram } from '../../../../../common/types';
import s from './EducationalProgramsList.module.scss';

type EducationalProgramsListProps = {
	educationalPrograms: EducationalProgram[];
};

export const EducationalProgramsList: React.FC<EducationalProgramsListProps> = ({ educationalPrograms }) => {
	return (
		<Space direction="horizontal" size={16} align="center" wrap={true} className={s.educationalPrograms}>
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
