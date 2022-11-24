import { IColumns, TrackProgress } from '../Context/types';
import { Discipline, EducationModule } from '../../../common/types';
import { message } from 'antd';
import { DropResult } from 'react-beautiful-dnd';

export const clone = (data: IColumns) => {
	return JSON.parse(JSON.stringify(data));
};

const getColumnKey = (columns: IColumns, droppableId: string) => {
	let columnKey = '';
	Object.entries(columns).forEach(
		(column) =>
			(columnKey = column[1].items.some((module) => module.id.toString() === droppableId.toString())
				? column[0]
				: columnKey)
	);
	return columnKey;
};

const getTargetModule = (columns: IColumns, columnKey: string, droppableId: string) => {
	return columns[columnKey].items.find((module) => module.id.toString() === droppableId.toString());
};

const getNewColumnsData = (
	columns: IColumns,
	columnKey: string,
	module: EducationModule,
	newDisciplines: Discipline[],
	droppableId: string
): IColumns => {
	const newModule: EducationModule = {
		...module,
		disciplines: newDisciplines,
	};
	return {
		...columns,
		[columnKey]: {
			...columns[columnKey],
			items: columns[columnKey].items.map((module) => {
				return module.id.toString() === droppableId.toString() ? { ...newModule } : { ...module };
			}),
		},
	};
};

export const deleteTask = (columns: IColumns, tracks: TrackProgress[], droppableId: string, index: number) => {
	columns = clone(columns);
	let columnKey = getColumnKey(columns, droppableId);
	const module = getTargetModule(columns, columnKey, droppableId);
	if (module) {
		const newDisciplines = module?.disciplines;
		const [removed] = newDisciplines.splice(index, 1);
		const newColumns = getNewColumnsData(columns, columnKey, module, newDisciplines, droppableId);
		return { removed, newColumns };
	}
};

export const addTask = (
	columns: IColumns,
	tracks: TrackProgress[],
	droppableId: string,
	index: number,
	newDiscipline: Discipline
) => {
	columns = clone(columns);
	let columnKey = getColumnKey(columns, droppableId);
	const module = getTargetModule(columns, columnKey, droppableId);
	if (module) {
		const newDisciplines = module?.disciplines;
		newDisciplines?.splice(index, 0, newDiscipline);
		return getNewColumnsData(columns, columnKey, module, newDisciplines, droppableId);
	}
};

const isModulesEqual = (source: string, destination: string) => {
	if (source.includes('_')) {
		return source.split('_')[1] === destination;
	}
	return source === destination.split('_')[1];
};

const isModulesInSameColumn = (source: string, destination: string) => {
	return (source.includes('_') && destination.includes('_')) || (!source.includes('_') && !destination.includes('_'));
};

export const isDropValid = (result: DropResult) => {
	const { source, destination } = result;
	if (!destination || isModulesInSameColumn(source.droppableId, destination?.droppableId)) {
		return message.warn('Необходимо перетащить курс в соседнюю колонку');
	}
	if (!isModulesEqual(source.droppableId, destination?.droppableId)) {
		return message.warn('Неверный модуль!');
	}
};
