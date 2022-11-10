import { studentReviewsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useStudentReviewsQuery = (page: number) => {
	return useQuery(['previews', page], () => studentReviewsAPI.getReviews(page), {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить отзывы студентов :('),
	});
};
