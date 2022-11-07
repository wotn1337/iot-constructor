import React from 'react';
import s from './StudentReview.module.scss';
import { Reviews } from './Reviews/Reviews';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type StudentReviewProps = {};

export const StudentReview: React.FC<StudentReviewProps> = () => {
	return (
		<section className={s.studentReview}>
			<h4 className={s.studentReview__title}>Отзывы студентов</h4>
			<Reviews />
		</section>
	);
};
