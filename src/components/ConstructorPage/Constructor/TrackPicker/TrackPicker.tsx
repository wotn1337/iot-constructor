import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Row } from 'antd';
import { Column } from './Column/Column';
import { EducationModule } from '../../../../common/types';
import { setColumns, useConstructorContext } from '../../Context';
import { Column as ColumnType } from '../../Context/types';

type TrackPickerProps = {
	modules: EducationModule[];
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ modules }) => {
	const {
		state: { columns },
		dispatch,
	} = useConstructorContext();

	const onDragEnd = (result: DropResult, columns: ColumnType[]) => {
		if (!result.destination) return;
		const { source, destination } = result;
		// console.log(source, destination);
		if (source.droppableId !== destination.droppableId) {
			// const startColumn = source.droppableId.includes('_') ? 1 : 0;
			// const endColumn = startColumn ? 0 : 1;
			// console.log('ddddd');
			// console.log(startColumn, endColumn);
			const sourceColumn = columns[0].items.find(
				(module) => module.id.toString() === source.droppableId.toString()
			);
			const destColumn = columns[1].items.find(
				(module) => module.id.toString() === destination?.droppableId.toString()
			);
			// console.log(sourceColumn, destColumn);
			if (sourceColumn && destColumn) {
				const sourceItems = [...sourceColumn.disciplines];
				const destItems = [...destColumn.disciplines];
				const [removed] = sourceItems.splice(source.index, 1);
				// console.log(sourceItems, destItems);
				destItems.splice(destination.index, 0, removed);
				dispatch(
					setColumns([
						{
							...columns[0],
							items: columns[0].items.map((module) => {
								return module.id.toString() === source.droppableId.toString()
									? {
											...module,
											disciplines: sourceItems,
									  }
									: { ...module };
							}),
						},
						{
							...columns[1],
							items: columns[1].items.map((module) => {
								return module.id.toString() === destination.droppableId.toString()
									? {
											...module,
											disciplines: destItems,
									  }
									: { ...module };
							}),
						},
					])
				);
			}
		} else return;
	};

	useEffect(() => {
		dispatch(
			setColumns([
				{
					id: 1,
					name: 'Выберите курсы',
					items: modules?.map((module) => ({
						...module,
						disciplines: module.is_spec ? module.disciplines : [],
					})),
					extra: true,
				},
				{
					id: 2,
					name: 'Мои курсы',
					items: modules?.map((module) => ({
						...module,
						id: `module_${module.id}`,
						disciplines: module.is_spec
							? []
							: module.disciplines.map((discipline) => ({
									...discipline,
									id: `${module.id}_${discipline.id}`,
							  })),
					})),
					extra: false,
				},
			])
		);
	}, [dispatch]);

	return (
		<Row gutter={20}>
			<DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
				{columns.map((item) => (
					<Column column={item} key={item.id} />
				))}
			</DragDropContext>
		</Row>
	);
};
