import { educationalDirectionsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useEducationalDirectionsQuery = () => {
	return useQuery(['educationalDirections'], educationalDirectionsAPI.getEducationalDirections, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список направлений подготовки :('),
	});
};
