import React from 'react';
import s from './EmployeesGrid.module.scss';
import { Col, Row } from 'antd';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { Employee } from '../types';

type EmployeesGridProps = {
	title: string;
	employees: Employee[];
};

export const EmployeesGrid: React.FC<EmployeesGridProps> = ({ title, employees }) => {
	return (
		<section className={s.employees}>
			<h4 className={s.employees__title}>{title}</h4>
			<Row gutter={[20, 32]}>
				{employees.map((employee) => (
					<Col key={employee.id} span={24} lg={12}>
						<EmployeeCard {...employee} />
					</Col>
				))}
			</Row>
		</section>
	);
};
