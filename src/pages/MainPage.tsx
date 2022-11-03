import React from 'react';
import { Intro, About, StudentReview, Advantages, Professions } from '../components';
import { Partners } from '../components/MainPage/Partners/Partners';
import { MobileApp } from '../components/MainPage/MobileApp/MobileApp';
import { usePartners } from '../hooks/usePartners';
import { Loader } from '../components/common/Loader/Loader';
import { useStudentReviews } from '../hooks/useStudentReviews';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	const { partners, loading: partnersLoading } = usePartners();
	const { reviews, loading: studentReviewsLoading } = useStudentReviews();
	const loading = partnersLoading || studentReviewsLoading;

	return (
		<Loader loading={loading} size="large">
			<Intro />
			<About />
			<Advantages />
			<StudentReview reviews={reviews} />
			<Professions />
			<Partners partners={partners} />
			<MobileApp />
		</Loader>
	);
};
