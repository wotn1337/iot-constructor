import axios, { CreateAxiosDefaults } from 'axios';
import {
	AdmissionCommitteeContactsResponse,
	DisciplinesResponse,
	EducationalProgramsResponse,
	EducationalModuleResponse,
	EducationalModulesResponse,
	EmployeesResponse,
	PartnersResponse,
	ProfessionalTrajectoriesResponse,
	ProfessionalTrajectoryResponse,
	ProfessionsQueryParams,
	SemestersResponse,
	SocialNetworksResponse,
	StudentReviewResponse,
	ProfessionsResponse,
} from './types';
import { Id } from '../common/types';
import { getQueryParams } from './utils';

const DOMAIN = process.env.REACT_APP_BACKEND_URL;
const VERSION = process.env.REACT_APP_BACKEND_VERSION;
const POSTFIX = process.env.REACT_APP_BACKEND_POSTFIX;
const API_URL = `${DOMAIN}/${POSTFIX}/${VERSION}`;
const CONFIG: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: { 'content-type': 'application/json' },
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
		const res = await instance.get<EducationalProgramsResponse>('educationalPrograms');
		return res.data.educational_programs;
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
			`educationalPrograms/${id}/educationalModules?${params.toString()}`
		);
		return res.data;
	},

	getEducationalModuleById: async (id?: Id) => {
		const res = await instance.get<EducationalModuleResponse>(
			`educationalDirections/educationalModules/${id}?withDisciplines=true`
		);
		return res.data.educational_module;
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

export const semestersNameAPI = {
	getSemestersName: async () => {
		const res = await instance.get<SemestersResponse>('semesters');
		return res.data.semesters;
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

export const professionsAPI = {
	getProfessions: async (params: ProfessionsQueryParams) => {
		const res = await instance.get<ProfessionsResponse>(`professions?${getQueryParams(params)}`);
		return res.data.professions;
	},
};
