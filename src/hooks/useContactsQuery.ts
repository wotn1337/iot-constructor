import { admissionCommitteeContactsAPI } from '../API/API';
import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Contacts } from '../common/types';
import { AxiosError } from 'axios';

export const useContactsQuery = () => {
	return useQuery<Contacts, AxiosError>(['contacts'], admissionCommitteeContactsAPI.getContacts, {
		keepPreviousData: true,
		staleTime: 300000,
		onError: () => message.error('Не удалось получить список контактов :('),
	});
};
