import { employeesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Employee } from '../components/Employees/types';
import { AxiosError } from 'axios';

export const useROPsQuery = () => {
	return useQuery<Employee[], AxiosError>(['ROPs'], employeesAPI.getROPs, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список РОПов :('),
	});
};
