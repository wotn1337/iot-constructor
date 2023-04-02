import { EducationalProgram, Id, Trajectory } from '../../common/types';

export type ProfessionType = {
	id: Id;
	title: string;
	description: string;
	photo: string | null;
	vacancies_count: number;
	area_vacancies_count: number;
	minimal_salary: number;
	median_salary: number;
	maximal_salary: number;
	professionalTrajectories: Trajectory[];
	educationalPrograms: EducationalProgram[];
};

export type SalaryType = 'minimal_salary' | 'median_salary' | 'maximal_salary';

export const salaryLocale = {
	minimal_salary: 'Минимальная',
	median_salary: 'Медианная',
	maximal_salary: 'Максимальная',
};
