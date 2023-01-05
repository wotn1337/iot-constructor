import { useQuery } from '@tanstack/react-query';
import { semestersNameAPI } from '../API/API';
import { message } from 'antd';

export const useSemestersQuery = () => {
	return useQuery(['semesters'], semestersNameAPI.getSemestersName, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список семестров :('),
	});
};
