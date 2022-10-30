import { useEffect, useState } from 'react';
import { StudentReview } from '../common/types';
import { studentReviewsAPI } from '../API/API';
import { message } from 'antd';

export const useStudentReviews = () => {
	const [reviews, setReviews] = useState<StudentReview[]>([]);
	const [loading, setLoading] = useState(true);

	// get partners
	useEffect(() => {
		setLoading(true);
		const { getReviews } = studentReviewsAPI;

		getReviews()
			.then((data) => setReviews(data))
			.catch(() => message.error('Не удалось получить отзывы студентов :('))
			.finally(() => setLoading(false));
	}, []);

	return { reviews, loading };
};
