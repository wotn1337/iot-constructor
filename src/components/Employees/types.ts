import { Id, SocialNetwork } from '../../common/types';

export type Employee = {
	id: Id;
	full_name: string;
	additional_information: string;
	photo?: string;
	vk_profile?: SocialNetwork;
	address?: string;
	phone_number?: string;
	audience?: string;
	email?: string;
};
