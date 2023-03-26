import { educationalProgramsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { EducationalProgram } from '../common/types';
import { AxiosError } from 'axios';

export const useEducationalProgramsQuery = () => {
	return useQuery<EducationalProgram[], AxiosError>(
		['educationalPrograms'],
		educationalProgramsAPI.getEducationalPrograms,
		{
			keepPreviousData: true,
			staleTime: 300000,
			onError: () => message.error('Не удалось получить список образовательных программ :('),
		}
	);
};
