import { employeesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Employee } from '../components/Employees/types';

export const useTutorsQuery = () => {
	return useQuery<Employee[], AxiosError>(['tutors'], employeesAPI.getTutors, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список тьюторов :('),
	});
};
