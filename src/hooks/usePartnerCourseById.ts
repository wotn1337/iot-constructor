import { partnerCoursesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Id, PartnerCourseTypeExtended } from '../common/types';
import { AxiosError } from 'axios';

export const usePartnerCourseByIdQuery = (id: Id) => {
	return useQuery<PartnerCourseTypeExtended, AxiosError>(
		['partnerCourse'],
		() => partnerCoursesAPI.getPartnerCourseById(id),
		{
			keepPreviousData: true,
			staleTime: 300000,
			onError: () => message.error('Не удалось получить описание курса :('),
		}
	);
};
