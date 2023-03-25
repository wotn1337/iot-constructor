import { Id } from '../../common/types';

export type ProfessionType = {
	id: Id;
	title: string;
	description: string;
	image: string;
	salary: Record<SalaryType, number>;
};

export type SalaryType = 'minimal' | 'median' | 'maximum';

export const salaryLocale = {
	minimal: 'Минимальная',
	median: 'Медианная',
	maximum: 'Максимальная',
};
