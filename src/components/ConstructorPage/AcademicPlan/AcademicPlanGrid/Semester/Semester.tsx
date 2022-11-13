import React from 'react';
import { Space, Typography } from 'antd';
import s from './Semester.module.scss';
import { DisciplinsList } from './DisciplinsList/DisciplinsList';
import { Id } from '../../../../../common/types';

type SemesterProps = {
	semesterTitle: string;
	lists: {
		id: Id;
		title: string;
		type: 'default' | 'primary';
		items: string[];
	}[];
};

export const Semester: React.FC<SemesterProps> = ({ semesterTitle, lists }) => {
	return (
		<Space size={16}>
			<Typography.Text className={s.semesterTitle}>{semesterTitle}</Typography.Text>
			{lists.map((list) => (
				<DisciplinsList key={list.id} {...list} />
			))}
		</Space>
	);
};
