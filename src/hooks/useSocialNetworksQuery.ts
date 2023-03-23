import { socialNetworksAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { SocialNetwork } from '../common/types';
import { AxiosError } from 'axios';

export const useSocialNetworksQuery = () => {
	return useQuery<SocialNetwork[], AxiosError>(['socialNetworks'], socialNetworksAPI.getSocialNetworks, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список социальных сетей :('),
	});
};
