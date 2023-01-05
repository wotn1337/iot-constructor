import React from 'react';
import { AboutTutors } from '../AboutTutors/AboutTutors';
import { BackgroundWrapper } from '../../common/BackgroundWrapper/BackgroundWrapper';
import s from './EmployeesPageContent.module.scss';
import { OurTutors } from '../OurTutors/OurTutors';
import { OurROPs } from '../OurROPs/OurROPs';
import { AboutROPs } from '../AboutROPs/AboutROPs';

type EmployeesPageContentProps = {};

export const EmployeesPageContent: React.FC<EmployeesPageContentProps> = () => {
	return (
		<BackgroundWrapper>
			<section className={s.inner}>
				<AboutTutors />
				<OurTutors />
				<AboutROPs />
				<OurROPs />
			</section>
		</BackgroundWrapper>
	);
};
