import { useInfiniteQuery } from '@tanstack/react-query';
import { professionsAPI } from '../API/API';
import { message } from 'antd';
import { ProfessionsQueryParams, ProfessionsResponse } from '../API/types';
import { AxiosError } from 'axios';

export const useProfessionsInfinityQuery = (params: ProfessionsQueryParams) => {
	return useInfiniteQuery<ProfessionsResponse, AxiosError>(
		['professions'],
		({ pageParam = 1 }) => professionsAPI.getProfessions({ ...params, page: pageParam }),
		{
			onError: () => message.error('Не удалось получить список профессий :('),
			getNextPageParam: (lastPage) => {
				return lastPage.meta.current_page < lastPage.meta.last_page
					? lastPage.meta.current_page + 1
					: undefined;
			},
		}
	);
};
