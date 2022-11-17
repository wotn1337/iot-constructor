import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Row } from 'antd';
import { Column } from './Column/Column';
import { EducationModule } from '../../../../common/types';
import { setColumns, setSemesterColumns, setSemesterFinish, useConstructorContext } from '../../Context';
import { IColumns } from '../../Context/types';
import { addTask, deleteTask } from '../utils';

type TrackPickerProps = {
	modules: EducationModule[];
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ modules }) => {
	const {
		state: { columns, currentSemester, semesters },
		dispatch,
	} = useConstructorContext();

	const onDragEnd = (result: DropResult, columns: IColumns) => {
		if (!result.destination) return;
		const { source, destination } = result;
		let data = deleteTask(columns, source.droppableId, source.index);
		let newData = data?.newColumns;
		let removed = data?.removed;

		if (newData && removed) {
			newData = addTask(newData, destination?.droppableId, destination?.index, removed) ?? {};
			dispatch(setColumns(newData));
			dispatch(setSemesterColumns({ id: currentSemester, columns: newData }));
			if (
				newData['2'].items
					.filter((module) => module.is_spec)
					.every((module) => module.choice_limit === module.disciplines.length)
			) {
				dispatch(setSemesterFinish({ id: currentSemester, isFinished: true }));
			} else dispatch(setSemesterFinish({ id: currentSemester, isFinished: false }));
		}
	};

	useEffect(() => {
		const data = semesters.find((sem) => sem.id.toString() === currentSemester.toString())?.columns;
		if (data) {
			dispatch(setColumns(data));
		} else
			dispatch(
				setColumns({
					'1': {
						...columns['1'],
						items: modules?.map((module) => ({
							...module,
							disciplines: module.is_spec ? module.disciplines : [],
						})),
					},
					'2': {
						...columns['2'],
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
					},
				})
			);
	}, [dispatch]);

	return (
		<Row gutter={20}>
			<DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
				{Object.values(columns).map((item) => (
					<Column column={item} key={item.id} />
				))}
			</DragDropContext>
		</Row>
	);
};
