import React from 'react';
import { salaryLocale } from '../../types';
import { Divider } from 'antd';
import s from './MobileSalaryChart.module.scss';

type MobileSalaryChartProps = {
	minimal_salary: number;
	median_salary: number;
	maximal_salary: number;
	className?: string;
};

export const MobileSalaryChart: React.FC<MobileSalaryChartProps> = ({
	minimal_salary,
	median_salary,
	maximal_salary,
	className,
}) => {
	return (
		<div className={`${s.profession__salaries} ${className}`}>
			<div className={s.profession__salary}>
				<span className={s.salary__number}>{minimal_salary}&#8381;</span>
				<span className={s.salary__title}>{salaryLocale.minimal_salary}</span>
			</div>
			<Divider type="vertical" className={s.divider} />
			<div className={`${s.profession__salary} ${s.medianSalary}`}>
				<span className={s.salary__number}>{median_salary}&#8381;</span>
				<span className={s.salary__title}>{salaryLocale.median_salary}</span>
			</div>
			<Divider type="vertical" className={s.divider} />
			<div className={s.profession__salary}>
				<span className={s.salary__number}>{maximal_salary}&#8381;</span>
				<span className={s.salary__title}>{salaryLocale.maximal_salary}</span>
			</div>
		</div>
	);
};
