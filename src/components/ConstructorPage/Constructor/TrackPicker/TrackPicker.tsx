import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { message, Row } from 'antd';
import { Column } from './Column/Column';
import { Discipline, EducationModule } from '../../../../common/types';
import {
	setColumns,
	setSemesterColumns,
	setSemesterFinish,
	setTracksPoints,
	useConstructorContext,
} from '../../Context';
import { IColumns } from '../../Context/types';
import { addTask, deleteTask, isDropValid } from '../utils';

type TrackPickerProps = {
	modules: EducationModule[];
};

export const TrackPicker: React.FC<TrackPickerProps> = ({ modules }) => {
	const {
		state: { columns, currentSemester, semesters, tracks },
		dispatch,
	} = useConstructorContext();

	const onDragEnd = (result: DropResult, columns: IColumns) => {
		isDropValid(result);
		const { source, destination } = result;
		if (!destination) {
			return message.warn('Необходимо перетащить курс в соседнюю колонку');
		}
		let data = deleteTask(columns, tracks, source.droppableId, source.index);
		let newData = data?.newColumns;
		let removed = data?.removed;

		if (newData && removed) {
			newData = addTask(newData, tracks, destination?.droppableId, destination?.index, removed) ?? {};
			dispatch(setColumns(newData));
			dispatch(setSemesterColumns({ id: currentSemester, columns: newData }));
			// if (
			// 	newData['2'].items
			// 		.filter((module) => module.is_spec)
			// 		.every((module) => module.choice_limit === module.disciplines.length)
			// ) {
			// 	dispatch(setSemesterFinish({ id: currentSemester, isFinished: true }));
			// } else dispatch(setSemesterFinish({ id: currentSemester, isFinished: false }));
		}
	};

	useEffect(() => {
		if (
			columns['2'].items.every((module) => {
				console.log(module.choice_limit, module.disciplines.length, module.is_spec);
				return !module.choice_limit || (module.choice_limit === module.disciplines.length && module.is_spec);
			})
		) {
			dispatch(setSemesterFinish({ id: currentSemester, isFinished: true }));
		}
		columns['2'].items.forEach((module) =>
			module.disciplines.forEach((item) =>
				item.professional_trajectories?.forEach((track) => {
					const course = tracks.find((t) => t.id === track.id);
					if (course) {
						dispatch(
							setTracksPoints({
								id: track.id,
								points: course.points + track.discipline_evaluation,
							})
						);
					}
				})
			)
		);
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
	}, []);

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
