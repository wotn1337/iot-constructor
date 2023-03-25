import { professionalTrajectoriesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Trajectory } from '../common/types';
import { AxiosError } from 'axios';

export const useProfessionalTrajectoriesQuery = () => {
	return useQuery<Trajectory[], AxiosError>(
		['professionalTrajectories'],
		() => professionalTrajectoriesAPI.getProfessionalTrajectories(),
		{
			keepPreviousData: true,
			staleTime: 300000,
			onError: () => message.error('Не удалось получить список траекторий :('),
		}
	);
};
