import { professionalTrajectoriesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useProfessionalTrajectoriesQuery = () => {
	return useQuery(['professionalTrajectories'], () => professionalTrajectoriesAPI.getProfessionalTrajectories(), {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список траекторий :('),
	});
};
