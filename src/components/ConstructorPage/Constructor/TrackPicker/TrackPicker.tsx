import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row } from 'antd';
import { Column } from './Column/Column';
import { EducationModule } from '../../../../common/types';
import { ColumnType } from './types';

type TrackPickerProps = {
	modules: EducationModule[];
};

const onDragEnd = () => {
	return;
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ modules }) => {
	const columns: ColumnType[] = [
		{
			id: 0,
			name: 'Выберите курсы',
			items: modules,
			extra: true,
		},
		{
			id: 1,
			name: 'Мои курсы',
			items: modules?.map((module) => ({
				...module,
				disciplines: module.is_spec ? module.disciplines : [],
			})),
			extra: false,
		},
	];
	return (
		<Row gutter={20}>
			<DragDropContext onDragEnd={onDragEnd}>
				{columns.map((item) => (
					<Column column={item} key={item.id} />
				))}
			</DragDropContext>
		</Row>
	);
};
