import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { message } from 'antd';
import { Column } from './Column/Column';
import { Discipline, EducationModule } from '../../../../common/types';
import { setColumns, setSemesterColumns, setSemesterFinish, useConstructorContext } from '../../Context';
import { IColumns } from '../../Context/types';
import { addTask, deleteTask, isModulesEqual, isModulesInSameColumn } from '../utils';

type TrackPickerProps = {
	modules: EducationModule[];
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ modules }) => {
	const {
		state: { columns, currentSemester, semesters },
		dispatch,
	} = useConstructorContext();

	const onDragEnd = (result: DropResult, columns: IColumns) => {
		const { source, destination } = result;

		if (!destination || isModulesInSameColumn(source.droppableId, destination?.droppableId)) {
			return message.warn('Необходимо перетащить десциплину в соседнюю колонку');
		}
		if (!isModulesEqual(source.droppableId, destination?.droppableId)) {
			return message.warn('Неверный модуль!');
		}

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
		if (
			columns['2'].items.every((module) => {
				return !module.choice_limit || (module.choice_limit === module.disciplines.length && module.is_spec);
			})
		) {
			dispatch(setSemesterFinish({ id: currentSemester, isFinished: true }));
		}
		dispatch(setSemesterColumns({ id: currentSemester, columns }));
	}, [columns]);

	useEffect(() => {
		const data = semesters.find((sem) => sem.id.toString() === currentSemester.toString())?.columns;

		if (data) {
			dispatch(setColumns(data));
		} else {
			const disciplines: Discipline[] = [];
			modules
				.filter((module) => !module.is_spec)
				.forEach((module) => {
					module.disciplines.forEach((disc) => disciplines.push(disc));
				});

			const requiredModule: EducationModule = {
				id: 'required_module',
				title: 'Обязательные дисциплины',
				is_spec: false,
				disciplines: disciplines,
				choice_limit: 0,
			};

			dispatch(
				setColumns({
					'1': {
						...columns['1'],
						items: modules?.filter((module) => module.is_spec),
					},
					'2': {
						...columns['2'],
						items: [
							...modules
								?.filter((module) => module.is_spec)
								.map((module) => ({
									...module,
									id: `module_${module.id}`,
									disciplines: [],
								})),
							requiredModule,
						],
					},
				})
			);
		}
	}, [currentSemester]);

	return (
		<DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
			{Object.values(columns).map((item) => (
				<Column column={item} key={item.id} />
			))}
		</DragDropContext>
	);
};
