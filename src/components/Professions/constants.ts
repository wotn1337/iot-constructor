import { Sorter } from '../common/FilterableContent/types';

export const sorters: Sorter[] = [
	{
		index: 0,
		label: 'По возрастанию зарплаты',
		sortField: 'sortBySalary',
		direction: 'asc',
	},
	{
		index: 1,
		label: 'По убыванию зарплаты',
		sortField: 'sortBySalary',
		direction: 'desc',
	},
	{
		index: 2,
		label: 'По возрастанию кол-ва вакансий',
		sortField: 'sortByVacancyCount',
		direction: 'asc',
	},
	{
		index: 3,
		label: 'По убыванию кол-ва вакансий',
		sortField: 'sortByVacancyCount',
		direction: 'desc',
	},
];
