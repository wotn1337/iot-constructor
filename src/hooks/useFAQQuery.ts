import { FAQAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useFAQQuery = () => {
	return useQuery(['FAQ'], FAQAPI.getFAQ, {
		onError: () => message.error('Не удалось получить список вопросов :('),
	});
};
