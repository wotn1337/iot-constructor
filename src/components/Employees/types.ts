import { Id } from '../../common/types';

export type Employee = {
	id: Id;
	full_name: string;
	additional_information: string;
	photo?: string;
	vk_profile?: string;
	address?: string;
	phone_number?: string;
	audience?: string;
	email?: string;
};
