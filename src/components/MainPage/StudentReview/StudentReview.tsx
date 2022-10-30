import React from 'react';
import s from './StudentReview.module.scss';
import { Reviews } from './Reviews/Reviews';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { StudentReview as ReviewType } from '../../../common/types';

type StudentReviewProps = {
	reviews: ReviewType[];
};

export const StudentReview: React.FC<StudentReviewProps> = ({ reviews }) => {
	return (
		<section className={s.studentReview}>
			<h4 className={s.studentReview__title}>Отзывы студентов</h4>
			<Reviews reviews={reviews} />
		</section>
	);
};
