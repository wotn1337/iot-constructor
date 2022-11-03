import { useEffect, useState } from 'react';
import { SocialNetwork } from '../common/types';
import { socialNetworksAPI } from '../API/API';
import { message } from 'antd';

export const useSocialNetworks = () => {
	const [socialNetworks, setSocialNetworks] = useState<SocialNetwork[]>([]);
	const [loading, setLoading] = useState(true);

	// get social networks
	useEffect(() => {
		setLoading(true);
		const { getSocialNetworks } = socialNetworksAPI;

		getSocialNetworks()
			.then((data) => setSocialNetworks(data))
			.catch(() => message.error('Не удалось получить список социальных сетей!'))
			.finally(() => setLoading(false));
	}, []);

	return { socialNetworks, loading };
};
