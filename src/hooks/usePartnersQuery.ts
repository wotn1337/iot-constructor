import { partnersAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Partner } from '../common/types';
import { AxiosError } from 'axios';

export const usePartnersQuery = () => {
	return useQuery<Partner[], AxiosError>(['partners'], partnersAPI.getPartners, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список партнеров :('),
	});
};
