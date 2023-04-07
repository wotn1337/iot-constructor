import { useInfiniteQuery } from '@tanstack/react-query';
import { partnerCoursesAPI } from '../API/API';
import { message } from 'antd';
import { PartnerCoursesQueryParams, PartnerCoursesResponse } from '../API/types';
import { AxiosError } from 'axios';

export const usePartnerCoursesInfinityQuery = (params: PartnerCoursesQueryParams) => {
	return useInfiniteQuery<PartnerCoursesResponse, AxiosError>(
		['partnerCourses'],
		({ pageParam = 1 }) => partnerCoursesAPI.getPartnerCourses({ ...params, page: pageParam }),
		{
			onError: () => message.error('Не удалось получить список курсов :('),
			getNextPageParam: (lastPage) => {
				return lastPage.meta.current_page < lastPage.meta.last_page
					? lastPage.meta.current_page + 1
					: undefined;
			},
		}
	);
};
