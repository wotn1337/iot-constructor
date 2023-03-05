import { ProfessionType } from '../types';

export const getSalaryChartWidth = (salary: ProfessionType['salary']) => {
	const { minimal, median, maximum } = salary;
	const firstPart = median / minimal;
	const secondPart = maximum / median;
	const full = firstPart + secondPart;

	const firstWidth = getNumberBetween(Math.round((firstPart / full) * 100), 10, 90);
	const secondWidth = getNumberBetween(Math.round((secondPart / full) * 100), 10, 90);

	return [firstWidth, secondWidth];
};

const getNumberBetween = (num: number, min: number, max: number) => {
	return Math.max(Math.min(num, max), min);
};
