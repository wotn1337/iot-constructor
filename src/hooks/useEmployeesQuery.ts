import { employeesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Id } from '../common/types';

export const useEmployeesQuery = (positionId?: Id) => {
	return useQuery(['employees'], () => employeesAPI.getEmployees(positionId), {
		onError: () => message.error('Не удалось получить список сотрудников :('),
	});
};
