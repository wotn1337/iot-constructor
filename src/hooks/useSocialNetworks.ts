import { useEffect, useState } from 'react';
import { SocialNetworks } from '../common/types';
import { socialNetworksAPI } from '../API/API';
import { message } from 'antd';

export const useSocialNetworks = () => {
	const [socialNetworks, setSocialNetworks] = useState<SocialNetworks[]>([]);
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
	console.log(socialNetworks);
	return { socialNetworks, loading };
};
