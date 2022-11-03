import { useEffect, useState } from 'react';
import { Contacts } from '../common/types';
import { admissionCommitteeContactsAPI } from '../API/API';
import { message } from 'antd';

export const useContacts = () => {
	const [contacts, setContacts] = useState<Contacts>();
	const [loading, setLoading] = useState(true);

	// get contacts
	useEffect(() => {
		setLoading(true);
		const { getContacts } = admissionCommitteeContactsAPI;

		getContacts()
			.then((data) => setContacts(data))
			.catch(() => message.error('Не удалось получить список контактов!'))
			.finally(() => setLoading(false));
	}, []);

	return { contacts, loading };
};
