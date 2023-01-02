import { Id, SocialNetwork } from '../../common/types';

export type Employee = {
	id: Id;
	name: string;
	info: string;
	avatar?: string;
	vk?: SocialNetwork;
	contacts: {
		address?: string;
		audience?: string;
		email?: string;
		phone?: string;
	};
};
