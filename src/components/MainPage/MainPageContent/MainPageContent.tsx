import React from 'react';
import { Intro } from '../Intro/Intro';
import { About } from '../About/About';
import { Advantages } from '../Advantages/Advantages';
import { StudentReview } from '../StudentReview/StudentReview';
import { Professions } from '../Professions/Professions';
import { Partners } from '../Partners/Partners';
import { MobileApp } from '../MobileApp/MobileApp';
import { Loader } from '../../common/Loader/Loader';
import { usePartners } from '../../../hooks/usePartners';
import { useStudentReviewsQuery } from '../../../hooks/useStudentReviewsQuery';
import { useMainPageContext } from '../Context';

type MainPageContentProps = {};

export const MainPageContent: React.FC<MainPageContentProps> = () => {
	const { partners, loading: partnersLoading } = usePartners();
	const {
		state: { studentReviewsPage },
	} = useMainPageContext();
	const { isLoading: studentReviewsLoading } = useStudentReviewsQuery(studentReviewsPage);
	const loading = partnersLoading || studentReviewsLoading;

	return (
		<Loader loading={loading} size="large">
			<Intro />
			<About />
			<Advantages />
			<StudentReview />
			<Professions />
			<Partners partners={partners} />
			<MobileApp />
		</Loader>
	);
};
