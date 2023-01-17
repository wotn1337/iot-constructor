import React from 'react';
import { Collapse, Space, Typography } from 'antd';
import './Semester.scss';
import { DisciplinsList } from './DisciplinsList/DisciplinsList';
import { List } from '../../types';
import { useMediaQuery } from 'react-responsive';

type SemesterProps = {
	semesterTitle: string;
	lists: List[];
	showDefault: boolean;
};

export const Semester: React.FC<SemesterProps> = ({ semesterTitle, lists, showDefault }) => {
	const isOnColumn = useMediaQuery({ maxWidth: 575.5 });

	return (
		<Space size={isOnColumn ? 8 : 16} direction="vertical" className="semesters-disciplins">
			<Typography.Text className="semester-title">{semesterTitle}</Typography.Text>
			{lists.map((list) =>
				isOnColumn ? (
					<Collapse
						key={list.id}
						defaultActiveKey={list.type === 'primary' ? [list.id + '-panel'] : undefined}
						className={`semesters-disciplins__collapse ${list.type === 'primary' ? 'primary' : ''}`}
					>
						<Collapse.Panel key={list.id + '-panel'} header={list.title}>
							<DisciplinsList
								{...list}
								title={undefined}
								hidden={!showDefault && list.type === 'default'}
							/>
						</Collapse.Panel>
					</Collapse>
				) : (
					<DisciplinsList key={list.id} {...list} hidden={!showDefault && list.type === 'default'} />
				)
			)}
		</Space>
	);
};
