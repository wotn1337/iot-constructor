import React from 'react';
import { ProfessionType, salaryLocale } from '../types';
import './SalaryChart.scss';
import { getSalaryChartWidth } from './utils';
import { SalaryItem } from './SalaryItem/SalaryItem';

type SalaryChartProps = {
	salary: ProfessionType['salary'];
};

export const SalaryChart: React.FC<SalaryChartProps> = ({ salary }) => {
	const [part1width, part2width] = getSalaryChartWidth(salary);

	return (
		<div className="salary-chart">
			<SalaryItem salary={salary.minimal} title={salaryLocale.minimal} lineWidth={part1width} />
			<SalaryItem salary={salary.median} title={salaryLocale.median} lineWidth={part2width} />
			<SalaryItem salary={salary.maximum} title={salaryLocale.maximum} />
		</div>
	);
};
