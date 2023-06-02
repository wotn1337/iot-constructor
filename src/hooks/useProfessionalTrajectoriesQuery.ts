import { professionalTrajectoriesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Id, Trajectory } from '../common/types';
import { AxiosError } from 'axios';

export const useProfessionalTrajectoriesQuery = (educationalProgramId?: Id) => {
	return useQuery<Trajectory[], AxiosError>(
		['professionalTrajectories'],
		() => professionalTrajectoriesAPI.getProfessionalTrajectories(educationalProgramId),
		{
			keepPreviousData: true,
			staleTime: 300000,
			onError: () => message.error('Не удалось получить список траекторий :('),
		}
	);
};
