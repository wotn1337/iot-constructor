import { Id } from '../../common/types';

export type ProfessionType = {
	id: Id;
	title: string;
	description: string;
	photo: string | null;
	vacancies_count: number;
	minimal_salary: number;
	median_salary: number;
	maximal_salary: number;
	salary: Record<SalaryType, number>;
};

export type SalaryType = 'minimal_salary' | 'median_salary' | 'maximal_salary';

export const salaryLocale = {
	minimal_salary: 'Минимальная',
	median_salary: 'Медианная',
	maximal_salary: 'Максимальная',
};
