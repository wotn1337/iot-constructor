type Salary = {
	minimal_salary: number;
	median_salary: number;
	maximal_salary: number;
};

export const getSalaryChartWidth = (salary: Salary) => {
	const { minimal_salary, median_salary, maximal_salary } = salary;
	const firstPart = median_salary / minimal_salary;
	const secondPart = maximal_salary / median_salary;
	const full = firstPart + secondPart;

	const firstWidth = getNumberBetween(Math.round((firstPart / full) * 100), 10, 90);
	const secondWidth = getNumberBetween(Math.round((secondPart / full) * 100), 10, 90);

	return [firstWidth, secondWidth];
};

const getNumberBetween = (num: number, min: number, max: number) => {
	return Math.max(Math.min(num, max), min);
};
