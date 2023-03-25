import React from 'react';
import { Hexagon } from '../../../common/Hexagon/Hexagon';
import s from './SalaryItem.module.scss';

type SalaryItemProps = {
	salary: number;
	title: string;
	lineWidth?: number;
};

export const SalaryItem: React.FC<SalaryItemProps> = ({ salary, title, lineWidth }) => {
	return (
		<>
			<div className={s.salaryItem}>
				<span className={s.salaryItem__salary}>{salary}&#8381;</span>
				<Hexagon size={11} border={{ width: 2, color: 'rgba(0, 0, 0, 0.25)' }} rotateAngle={90} />
				<span className={s.salaryItem__title}>{title}</span>
			</div>
			{lineWidth && (
				<div style={{ height: 2, flex: lineWidth, backgroundColor: 'rgba(0, 0, 0, 0.25)', marginTop: 24 }} />
			)}
		</>
	);
};
