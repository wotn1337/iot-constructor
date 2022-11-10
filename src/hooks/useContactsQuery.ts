import { admissionCommitteeContactsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';

export const useContactsQuery = () => {
	return useQuery(['contacts'], admissionCommitteeContactsAPI.getContacts, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список контактов :('),
	});
};
