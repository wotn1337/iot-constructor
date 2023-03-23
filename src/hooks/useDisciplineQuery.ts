import { disciplinesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Discipline, Id } from '../common/types';
import { AxiosError } from 'axios';

export const useDisciplineQuery = (id: Id | undefined) => {
	return useQuery<Discipline | undefined, AxiosError>(['discipline'], () => disciplinesAPI.getDiscipline(id), {
		onError: () => message.error('Не удалось получить информацию о дисциплине :('),
		enabled: !!id,
	});
};
