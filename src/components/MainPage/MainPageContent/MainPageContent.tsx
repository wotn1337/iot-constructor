import React from 'react';
import { Intro } from '../Intro/Intro';
import { About } from '../About/About';
import { Advantages } from '../Advantages/Advantages';
import { StudentReview } from '../StudentReview/StudentReview';
import { Professions } from '../Professions/Professions';
import { Partners } from '../Partners/Partners';
import { MobileApp } from '../MobileApp/MobileApp';
import { Loader } from '../../common/Loader/Loader';
import { usePartnersQuery } from '../../../hooks/usePartnersQuery';
import { useStudentReviewsQuery } from '../../../hooks/useStudentReviewsQuery';
import { useMainPageContext } from '../Context';
import s from './MainPageContent.module.scss';

type MainPageContentProps = {};

export const MainPageContent: React.FC<MainPageContentProps> = () => {
	const {
		state: { studentReviewsPage },
	} = useMainPageContext();
	const { isLoading: partnersLoading } = usePartnersQuery();
	const { isLoading: studentReviewsLoading } = useStudentReviewsQuery(studentReviewsPage);
	const loading = partnersLoading || studentReviewsLoading;

	return (
		<Loader loading={loading} size="large">
			<section className={s.wrapper}>
				<Intro />
				<About />
				<Advantages />
				<StudentReview />
				<Professions />
				<Partners />
				<MobileApp />
			</section>
		</Loader>
	);
};
