import React from 'react';
import { EmployeesPageContent } from '../components/Employees/EmployeesPageContent/EmployeesPageContent';
import { Helmet } from 'react-helmet';

type EmployeesPageProps = {};

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
	return (
		<>
			<Helmet>
				<title>Кураторы</title>
			</Helmet>
			<EmployeesPageContent />
		</>
	);
};
