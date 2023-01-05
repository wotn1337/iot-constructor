import axios from 'axios';
import {
	AdmissionCommitteeContactsResponse,
	DisciplinesResponse,
	EducationalDirectionsResponse,
	EducationalModulesResponse,
	EmployeesResponse,
	PartnersResponse,
	ProfessionalTrajectoriesResponse,
	ProfessionalTrajectoryResponse,
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

export const educationalDirectionsAPI = {
	getEducationalDirections: async () => {
		const res = await instance.get<EducationalDirectionsResponse>('educationalDirections');
		return res.data.educational_directions;
	},
};

export const educationalModulesAPI = {
	getEducationalModules: async (id?: Id, semester?: number, trajectoryId?: Id) => {
		const params = new URLSearchParams();
		if (semester) {
			params.append('paginate', 'true');
			params.append('page', String(semester));
		}
		if (trajectoryId) {
			params.append('professionalTrajectoryId', String(trajectoryId));
		}

		const res = await instance.get<EducationalModulesResponse>(
			`educationalDirections/${id}/educationalModules?${params.toString()}`
		);
		return res.data;
	},
};

export const professionalTrajectoriesAPI = {
	getProfessionalTrajectories: async () => {
		const res = await instance.get<ProfessionalTrajectoriesResponse>('professionalTrajectories');
		return res.data.professional_trajectories;
	},

	getProfessionalTrajectoryById: async (id: Id | undefined) => {
		const res = await instance.get<ProfessionalTrajectoryResponse>(
			`professionalTrajectories/${id}?disciplinesCount=true`
		);
		return res.data.professional_trajectory;
	},
};

export const disciplinesAPI = {
	getDiscipline: async (id: Id | undefined) => {
		if (id) {
			const res = await instance.get<DisciplinesResponse>(`disciplines/${id}`);
			return res.data.discipline;
		}
		return undefined;
	},
};

export const employeesAPI = {
	getEmployees: async (positionId?: Id) => {
		const params = new URLSearchParams();
		if (positionId) {
			params.append('positionId', String(positionId));
		}

		const res = await instance.get<EmployeesResponse>(`employees?${params.toString()}`);
		return res.data.employees;
	},

	getTutors: async () => {
		return employeesAPI.getEmployees(2);
	},

	getROPs: async () => {
		return employeesAPI.getEmployees(1);
	},
};
