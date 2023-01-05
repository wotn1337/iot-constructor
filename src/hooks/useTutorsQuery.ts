import { employeesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useTutorsQuery = () => {
	return useQuery(['tutors'], employeesAPI.getTutors, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список тьюторов :('),
	});
};
