import React from 'react';
import { salaryLocale } from '../types';
import './SalaryChart.scss';
import { getSalaryChartWidth } from './utils';
import { SalaryItem } from './SalaryItem/SalaryItem';

type SalaryChartProps = {
	minimal_salary: number;
	median_salary: number;
	maximal_salary: number;
};

export const SalaryChart: React.FC<SalaryChartProps> = ({ minimal_salary, median_salary, maximal_salary }) => {
	const [part1width, part2width] = getSalaryChartWidth({ minimal_salary, median_salary, maximal_salary });

	return (
		<div className="salary-chart">
			<SalaryItem salary={minimal_salary} title={salaryLocale.minimal_salary} lineWidth={part1width} />
			<SalaryItem salary={median_salary} title={salaryLocale.median_salary} lineWidth={part2width} />
			<SalaryItem salary={maximal_salary} title={salaryLocale.maximal_salary} />
		</div>
	);
};
