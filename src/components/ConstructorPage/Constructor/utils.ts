import { IColumns, Semester } from '../Context/types';
import { Discipline, EducationModule } from '../../../common/types';

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

export const deleteTask = (columns: IColumns, droppableId: string, index: number) => {
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

export const chooseTask = (columns: IColumns, droppableId: string, index: number) => {
	columns = clone(columns);
	let columnKey = getColumnKey(columns, droppableId);
	const module = getTargetModule(columns, columnKey, droppableId);
	if (module) {
		const newDisciplines = module?.disciplines;
		const [removed] = newDisciplines.splice(index, 1);
		return removed;
	}
};

export const addTask = (columns: IColumns, droppableId: string, index: number, newDiscipline: Discipline) => {
	columns = clone(columns);
	let columnKey = getColumnKey(columns, droppableId);
	const module = getTargetModule(columns, columnKey, droppableId);
	if (module) {
		const newDisciplines = module?.disciplines;
		newDisciplines?.splice(index, 0, newDiscipline);
		return getNewColumnsData(columns, columnKey, module, newDisciplines, droppableId);
	}
};

export const isModulesEqual = (source: string, destination: string) => {
	if (source.includes('_')) {
		return source.split('_')[1] === destination;
	}
	return source === destination.split('_')[1];
};

export const isModulesInSameColumn = (source: string, destination: string) => {
	return (source.includes('_') && destination.includes('_')) || (!source.includes('_') && !destination.includes('_'));
};

export const isDisciplineSelectedBefore = (semesters: Semester[], discipline: Discipline) => {
	let isSelected = false;
	semesters.forEach((sem) => {
		if (sem.columns) {
			sem.columns['2']?.items?.forEach((module) => {
				if (module.disciplines.some((disc) => disc.id === discipline.id)) {
					console.log(
						module.disciplines.some((disc) => disc.id === discipline.id),
						discipline.title
					);
					isSelected = module.disciplines.some((disc) => disc.id === discipline.id);
				}
			});
		}
	});
	return isSelected;
};
