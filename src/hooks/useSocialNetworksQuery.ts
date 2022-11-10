import { socialNetworksAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useSocialNetworksQuery = () => {
	return useQuery(['socialNetworks'], socialNetworksAPI.getSocialNetworks, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список социальных сетей :('),
	});
};
