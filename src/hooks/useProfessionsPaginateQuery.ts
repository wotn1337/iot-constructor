import { useQuery } from '@tanstack/react-query';
import { professionsAPI } from '../API/API';
import { message } from 'antd';
import { ProfessionsQueryParams, ProfessionsResponse } from '../API/types';
import { AxiosError } from 'axios';

export const useProfessionsPaginateQuery = (params: ProfessionsQueryParams) => {
	return useQuery<ProfessionsResponse, AxiosError>(
		['professions', params.page],
		() => professionsAPI.getProfessions(params),
		{
			onError: () => message.error('Не удалось получить список профессий :('),
		}
	);
};
