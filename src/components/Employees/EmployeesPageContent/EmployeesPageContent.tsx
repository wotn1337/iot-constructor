import React from 'react';
import { AboutEmployees } from '../AboutEmployees/AboutEmployees';
import { BackgroundWrapper } from '../../common/BackgroundWrapper/BackgroundWrapper';
import s from './EmployeesPageContent.module.scss';

type EmployeesPageContentProps = {};

export const EmployeesPageContent: React.FC<EmployeesPageContentProps> = () => {
	return (
		<BackgroundWrapper>
			<section className={s.inner}>
				<AboutEmployees />
			</section>
		</BackgroundWrapper>
	);
};
