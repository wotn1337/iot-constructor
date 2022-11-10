import { partnersAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const usePartnersQuery = () => {
	return useQuery(['partners'], partnersAPI.getPartners, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список партнеров :('),
	});
};
