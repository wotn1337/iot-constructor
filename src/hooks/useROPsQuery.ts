import { employeesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useROPsQuery = () => {
	return useQuery(['ROPs'], employeesAPI.getROPs, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список РОПов :('),
	});
};
