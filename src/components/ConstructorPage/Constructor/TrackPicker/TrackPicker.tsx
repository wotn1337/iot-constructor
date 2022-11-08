import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row } from 'antd';
import { Column } from './Column/Column';

type TrackPickerProps = {};
type Tag = {
	id: string;
	name: string;
};

export type CourseType = {
	id: string;
	name: string;
	tags?: Tag[];
};

const onDragEnd = () => {
	return;
};

export type ColumnType = {
	name: string;
	items: CourseType[];
	extra: boolean;
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ ...props }) => {
	const columns: ColumnType[] = [
		{
			name: 'Выберите курсы',
			items: [
				{
					id: '1',
					name: 'js',
					tags: [
						{ id: '0', name: 'web' },
						{ id: '1', name: 'gameGev' },
					],
				},
				{
					id: '2',
					name: 'python',
				},
				{
					id: '3',
					name: 'java',
				},
				{
					id: '4',
					name: 'js',
					tags: [{ id: '0', name: 'web' }],
				},
				{
					id: '5',
					name: 'python',
				},
				{
					id: '6',
					name: 'java',
				},
				{
					id: '7',
					name: 'js',
					tags: [{ id: '0', name: 'web' }],
				},
			],
			extra: true,
		},
		{
			name: 'Мои курсы',
			items: [],
			extra: false,
		},
	];
	return (
		<Row gutter={20}>
			<DragDropContext onDragEnd={onDragEnd}>
				{Object.entries(columns).map(([columnId, column], index) => (
					<Column columnId={columnId} column={column} key={index} />
				))}
			</DragDropContext>
		</Row>
	);
};
