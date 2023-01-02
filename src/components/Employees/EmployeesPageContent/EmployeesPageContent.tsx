import React from 'react';
import { AboutEmployees } from '../AboutEmployees/AboutEmployees';
import { BackgroundWrapper } from '../../common/BackgroundWrapper/BackgroundWrapper';
import s from './EmployeesPageContent.module.scss';
import { OurTutors } from '../OurTutors/OurTutors';
import { OurROPs } from '../OurROPs/OurROPs';

type EmployeesPageContentProps = {};

export const EmployeesPageContent: React.FC<EmployeesPageContentProps> = () => {
	return (
		<BackgroundWrapper>
			<section className={s.inner}>
				<AboutEmployees />
				<OurTutors />
				<OurROPs />
			</section>
		</BackgroundWrapper>
	);
};
