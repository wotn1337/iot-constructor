import React from 'react';
import { EducationalProgram } from '../../../common/types';
import { Space, Tag } from 'antd';
import s from './EducationalPrograms.module.scss';

type EducationalProgramsProps = {
	educationPrograms: EducationalProgram[] | undefined;
	wrap?: boolean;
	className?: string;
};

export const EducationalPrograms: React.FC<EducationalProgramsProps> = ({ educationPrograms, wrap, className }) => {
	return (
		<Space direction="vertical" size={16} className={className}>
			<span className={s.title}>Образовательные программы</span>
			<Space size={8} wrap={wrap}>
				{educationPrograms?.map((program) => (
					<Tag key={program.id} className={s.tag}>
						<a href={program.page_link} target="_blank" rel="noreferrer">
							{program.title}
						</a>
					</Tag>
				))}
			</Space>
		</Space>
	);
};
