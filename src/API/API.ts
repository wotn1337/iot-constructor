import axios, { CreateAxiosDefaults } from 'axios';
import {
	AdmissionCommitteeContactsResponse,
	DisciplinesResponse,
	EducationalProgramsResponse,
	EducationalModuleResponse,
	EducationalModulesResponse,
	EmployeesResponse,
	FAQResponse,
	PartnersResponse,
	ProfessionalTrajectoriesResponse,
	ProfessionalTrajectoryResponse,
	ProfessionsQueryParams,
	SemestersResponse,
	SocialNetworksResponse,
	StudentReviewResponse,
	ProfessionsResponse,
	PartnerCoursesQueryParams,
	PartnerCoursesResponse,
	PartnerCourseByIdResponse,
	PartnersParams,
	EducationalModulesNewResponse,
	EducationalModuleNewResponse,
} from './types';
import { Id, StatisticDataType } from '../common/types';
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
	getPartners: async (params?: PartnersParams) => {
		const res = await instance.get<PartnersResponse>(`partners?${getQueryParams(params)}`);
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

export const educationalProgramsAPI = {
	getEducationalPrograms: async () => {
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

		const res = await instance.get<EducationalModulesNewResponse>(
			`educationalPrograms/${id}/disciplines?${params.toString()}`
		);
		return {
			...res.data,
			semesters: res.data.semesters.map((sem) => ({
				...sem,
				educationalModules: sem.disciplines.map((dis) => ({
					...dis,
					disciplines: dis.course_assemblies,
				})),
			})),
		} as EducationalModulesResponse;
	},

	getEducationalModuleById: async (id?: Id) => {
		const res = await instance.get<EducationalModuleNewResponse>(
			`educationalPrograms/disciplines/${id}?withCourseAssemblies=true`
		);
		return (
			{
				educational_module: {
					...res.data.discipline,
					disciplines: res.data.discipline.course_assemblies,
				},
			} as EducationalModuleResponse
		).educational_module;
	},
};

export const professionalTrajectoriesAPI = {
	getProfessionalTrajectories: async (educationalProgramId?: Id) => {
		const params = new URLSearchParams();
		if (educationalProgramId) {
			params.append('educational_program_id', String(educationalProgramId));
		}

		const res = await instance.get<ProfessionalTrajectoriesResponse>(`professionalTrajectories?${params}`);
		return res.data.professional_trajectories;
	},

	getProfessionalTrajectoryById: async (id: Id | undefined) => {
		const res = await instance.get<ProfessionalTrajectoryResponse>(
			`professionalTrajectories/${id}?loadCourseAssembliesCount=true&loadProfessions=true`
		);
		return res.data.professional_trajectory;
	},
};

export const disciplinesAPI = {
	getDiscipline: async (id: Id | undefined) => {
		if (id) {
			const res = await instance.get<DisciplinesResponse>(`courseAssemblies/${id}`);
			return res.data.course_assembly;
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
		return res.data;
	},
};

export const FAQAPI = {
	getFAQ: async () => {
		const res = await instance.get<FAQResponse>('faq');
		return res.data.FAQ;
	},
};

export const partnerCoursesAPI = {
	getPartnerCourses: async (params: PartnerCoursesQueryParams) => {
		const res = await instance.get<PartnerCoursesResponse>(`partners/courses?${getQueryParams(params)}`);
		return res.data;
	},
	getPartnerCourseById: async (Id: Id) => {
		const res = await instance.get<PartnerCourseByIdResponse>(`partners/courses/${Id}`);
		return res.data.course;
	},
};

export const statisticAPI = {
	sendStatistic: async (data: StatisticDataType) => {
		instance.post<StatisticDataType>(`stat`, data).catch((e) => console.error(e));
	},
};
