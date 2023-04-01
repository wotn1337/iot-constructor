import React from 'react';
import { Hexagon } from '../../../common/Hexagon/Hexagon';
import s from './SalaryItem.module.scss';

type SalaryItemProps = {
	salary: number;
	title: string;
	lineWidth?: number;
	type: 'primary' | 'light';
};

export const SalaryItem: React.FC<SalaryItemProps> = ({ salary, title, lineWidth, type }) => {
	return (
		<>
			<div className={`${s.salaryItem}${type === 'light' ? ` ${s.salaryItem__light}` : ''}`}>
				<span className={s.salaryItem__salary}>{salary}&#8381;</span>
				{type === 'primary' && (
					<Hexagon size={11} border={{ width: 2, color: 'rgba(0, 0, 0, 0.25)' }} rotateAngle={90} />
				)}
				<span className={s.salaryItem__title}>{title}</span>
			</div>
			{lineWidth && (
				<div
					className={`${s.line}${type === 'light' ? ` ${s.line__light}` : ''}`}
					style={{ flex: lineWidth }}
				/>
			)}
		</>
	);
};
