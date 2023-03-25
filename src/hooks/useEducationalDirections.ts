import { educationalProgramsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Direction } from '../common/types';
import { AxiosError } from 'axios';

export const useEducationalDirectionsQuery = () => {
	return useQuery<Direction[], AxiosError>(['educationalDirections'], educationalProgramsAPI.getEducationalPrograms, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список направлений подготовки :('),
	});
};
