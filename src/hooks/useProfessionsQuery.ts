import { useQuery } from '@tanstack/react-query';
import { professionsAPI } from '../API/API';
import { message } from 'antd';
import { ProfessionsQueryParams } from '../API/types';
import { ProfessionType } from '../components/Professions/types';
import { AxiosError } from 'axios';

export const useProfessionsQuery = (params: ProfessionsQueryParams) => {
	return useQuery<ProfessionType[], AxiosError>(['professions'], () => professionsAPI.getProfessions(params), {
		onError: () => message.error('Не удалось получить список профессий :('),
	});
};
