import { ProfessionType } from '../types';

export const getSalaryChartWidth = (salary: ProfessionType['salary']) => {
	const { minimal, median, maximum } = salary;
	const firstPart = median / minimal;
	const secondPart = maximum / median;
	const full = firstPart + secondPart;

	const firstWidth = Math.min(Math.round((firstPart / full) * 100), 90);
	const secondWidth = Math.max(Math.round((secondPart / full) * 100), 10);

	return [firstWidth, secondWidth];
};
