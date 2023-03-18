import { useQuery } from '@tanstack/react-query';
import { professionsAPI } from '../API/API';
import { message } from 'antd';
import { ProfessionsQueryParams } from '../API/types';

export const useProfessionsQuery = (params: ProfessionsQueryParams) => {
	return useQuery(['professions'], () => professionsAPI.getProfessions(params), {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список профессий :('),
	});
};
