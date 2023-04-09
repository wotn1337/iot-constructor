import React, { useContext, useEffect } from 'react';
import { Intro } from '../Intro/Intro';
import { About } from '../About/About';
import { Advantages } from '../Advantages/Advantages';
import { StudentReview } from '../StudentReview/StudentReview';
import { Professions } from '../Professions/Professions';
import { Partners } from '../Partners/Partners';
import { Loader } from '../../common/Loader/Loader';
import { usePartnersQuery } from '../../../hooks/usePartnersQuery';
import { useStudentReviewsQuery } from '../../../hooks/useStudentReviewsQuery';
import { useMainPageContext } from '../Context';
import s from './MainPageContent.module.scss';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';
import { AxiosError } from 'axios';

type MainPageContentProps = {};

export const MainPageContent: React.FC<MainPageContentProps> = () => {
	const {
		state: { studentReviewsPage },
	} = useMainPageContext();
	const { isLoading: partnersLoading, error: partnersError } = usePartnersQuery({ paginate: 5 });
	const { isLoading: studentReviewsLoading, error: studentReviewsError } = useStudentReviewsQuery(studentReviewsPage);
	const { setError } = useContext(ServerErrorContext);
	const loading = partnersLoading || studentReviewsLoading;

	useEffect(() => {
		if (partnersError) {
			setError(partnersError as AxiosError);
			return;
		}
		if (studentReviewsError) {
			setError(studentReviewsError as AxiosError);
		}
	}, [partnersError, studentReviewsError]);

	return (
		<Loader loading={loading} size="large">
			<section className={s.wrapper}>
				<Intro />
				<About />
				<Advantages />
				<StudentReview />
				<Professions />
				<Partners />
			</section>
		</Loader>
	);
};
