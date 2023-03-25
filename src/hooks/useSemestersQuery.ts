import { useQuery } from '@tanstack/react-query';
import { semestersNameAPI } from '../API/API';
import { message } from 'antd';
import { Semester } from '../common/types';
import { AxiosError } from 'axios';

export const useSemestersQuery = () => {
	return useQuery<Semester[], AxiosError>(['semesters'], semestersNameAPI.getSemestersName, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список семестров :('),
	});
};
