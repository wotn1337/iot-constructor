import axios from 'axios';
import {
	AdmissionCommitteeContactsResponse,
	DisciplinesResponse,
	EducationalModulesResponse,
	PartnersResponse,
	ProfessionalTrajectories,
	SocialNetworksResponse,
	StudentReviewResponse,
} from './types';
import { Id } from '../common/types';

const DOMAIN = 'https://constructor-iot-backend.na4u.ru';
const VERSION = 'v1';
const API_URL = `${DOMAIN}/api/${VERSION}`;
const CONFIG = {
	baseURL: API_URL,
	header: { 'content-type': 'application/json' },
};
const instance = axios.create(CONFIG);

export const partnersAPI = {
	getPartners: async () => {
		const res = await instance.get<PartnersResponse>('partners');
		return res.data.partners;
	},
};

export const studentReviewsAPI = {
	getReviews: async (page: number) => {
		const res = await instance.get<StudentReviewResponse>(`reviews?page=${page}`);
		return res.data;
	},
};

export const admissionCommitteeContactsAPI = {
	getContacts: async () => {
		const res = await instance.get<AdmissionCommitteeContactsResponse>('admissionCommitteeContactsBlock');
		return res.data.admission_committee_contacts_block;
	},
};

export const socialNetworksAPI = {
	getSocialNetworks: async () => {
		const res = await instance.get<SocialNetworksResponse>('socialNetworksBlock');
		return res.data.social_networks_block.data;
	},
};

export const educationalModulesAPI = {
	getEducationalModules: async (id: Id, semester: number) => {
		const res = await instance.get<EducationalModulesResponse>(
			`educationalDirections/${id}/educationalModules?paginate=true&page=${semester}`
		);
		return res.data;
	},
};

export const professionalTrajectoriesAPI = {
	getProfessionalTrajectories: async () => {
		const res = await instance.get<ProfessionalTrajectories>('professionalTrajectories');
		return res.data.professional_trajectories;
	},
};

export const disciplinsAPI = {
	getDisciplin: async (id: Id | undefined) => {
		if (id) {
			const res = await instance.get<DisciplinesResponse>(`disciplines/${id}`);
			return res.data.discipline;
		}
		return undefined;
	},
};
