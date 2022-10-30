import { useEffect, useState } from 'react';
import { Partner } from '../common/types';
import { partnersAPI } from '../API/API';
import { message } from 'antd';

export const usePartners = () => {
	const [partners, setPartners] = useState<Partner[]>([]);
	const [loading, setLoading] = useState(true);

	// get partners
	useEffect(() => {
		setLoading(true);
		const { getPartners } = partnersAPI;

		getPartners()
			.then((data) => setPartners(data))
			.catch(() => message.error('Не удалось получить список партнеров :('))
			.finally(() => setLoading(false));
	}, []);

	return { partners, loading };
};
