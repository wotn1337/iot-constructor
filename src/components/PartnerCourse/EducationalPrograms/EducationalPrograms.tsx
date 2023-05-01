import React from 'react';
import { EducationalProgram } from '../../../common/types';
import { Space, Tag } from 'antd';
import s from './EducationalPrograms.module.scss';

type EducationalProgramsProps = {
	educationPrograms: EducationalProgram[] | undefined;
};

export const EducationalPrograms: React.FC<EducationalProgramsProps> = ({ educationPrograms }) => {
	return (
		<Space direction="vertical" size={16}>
			<span className={s.title}>Образовательные программы</span>
			<Space className={s.list} size={8}>
				{educationPrograms?.map((program) => (
					<Tag key={program.id} className={s.tag}>
						<a href={program.page_link} target="_blank">
							{program.title}
						</a>
					</Tag>
				))}
			</Space>
		</Space>
	);
};
