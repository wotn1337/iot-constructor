import { disciplinsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Id } from '../common/types';

export const useDisciplineQuery = (id: Id | undefined) => {
	return useQuery(['discipline'], () => disciplinsAPI.getDisciplin(id), {
		onError: () => message.error('Не удалось получить информацию о дисциплине :('),
		enabled: !!id,
	});
};
