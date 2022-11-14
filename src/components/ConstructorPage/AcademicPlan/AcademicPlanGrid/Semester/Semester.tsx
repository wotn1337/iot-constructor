import React from 'react';
import { Space, Typography } from 'antd';
import s from './Semester.module.scss';
import { DisciplinsList } from './DisciplinsList/DisciplinsList';
import { List } from '../../types';

type SemesterProps = {
	semesterTitle: string;
	lists: List[];
	showDefault: boolean;
};

export const Semester: React.FC<SemesterProps> = ({ semesterTitle, lists, showDefault }) => {
	return (
		<Space size={16} direction="vertical">
			<Typography.Text className={s.semesterTitle}>{semesterTitle}</Typography.Text>
			{lists.map((list) => (
				<DisciplinsList key={list.id} {...list} hidden={!showDefault && list.type === 'default'} />
			))}
		</Space>
	);
};
