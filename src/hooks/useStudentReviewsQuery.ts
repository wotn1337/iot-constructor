import { studentReviewsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { StudentReviewResponse } from '../API/types';
import { AxiosError } from 'axios';

export const useStudentReviewsQuery = (page: number) => {
	return useQuery<StudentReviewResponse, AxiosError>(['previews', page], () => studentReviewsAPI.getReviews(page), {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить отзывы студентов :('),
	});
};
