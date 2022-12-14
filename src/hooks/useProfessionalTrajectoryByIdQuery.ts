import { Id } from '../common/types';
import { useQuery } from '@tanstack/react-query';
import { professionalTrajectoriesAPI } from '../API/API';
import { message } from 'antd';

export const useProfessionalTrajectoryByIdQuery = (id: Id | undefined) => {
	return useQuery(['professionalTrajectory'], () => professionalTrajectoriesAPI.getProfessionalTrajectoryById(id), {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить данные о траектории :('),
	});
};
