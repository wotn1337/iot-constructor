import { educationalModulesAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Id } from '../common/types';

export const useEducationalModuleByIdQuery = (id?: Id) => {
	return useQuery(['educationalModule'], () => educationalModulesAPI.getEducationalModuleById(id), {
		onError: () => message.error('Не удалось получить образовательный модуль :('),
	});
};
