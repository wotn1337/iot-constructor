import {
	Contacts,
	Discipline,
	EducationModule,
	Partner,
	SocialNetwork,
	StudentReview,
	Trajectory,
	Direction,
	Id,
	Semester,
	SortDirection,
} from '../common/types';
import { Employee } from '../components/Employees/types';
import { ProfessionType } from '../components/Professions/types';

export type PartnersResponse = { partners: Partner[] };
export type StudentReviewResponse = {
	reviews: StudentReview[];
	meta: {
		current_page: number;
		last_page: number;
		total: number;
		per_page: number;
	};
};
export type AdmissionCommitteeContactsResponse = {
	admission_committee_contacts_block: Contacts;
};
export type SocialNetworksResponse = {
	social_networks_block: { id: string; data: SocialNetwork[]; institute: string };
};

export type EducationalProgramsResponse = {
	meta: { total: number };
	educational_programs: Direction[];
};
export type EducationalModulesResponse = {
	meta: { total: number };
	semesters: {
		id: Id;
		numerical_representation: number;
		text_representation: string;
		educationalModules: EducationModule[];
	}[];
};
export type EducationalModuleResponse = { educational_module: EducationModule };
export type ProfessionalTrajectoriesResponse = { professional_trajectories: Trajectory[] };
export type ProfessionalTrajectoryResponse = { professional_trajectory: Trajectory };
export type DisciplinesResponse = { discipline: Discipline };
export type SemestersResponse = { semesters: Semester[] };
export type EmployeesResponse = { employees: Employee[] };

export type ProfessionsQueryParams = {
	withProfessionalTrajectories?: true;
	paginate?: number;
	withEducationalPrograms?: true;
	professionalTrajectories?: Id[];
	professionTitle?: string;
	educationalPrograms?: Id[];
	sortBySalary?: SortDirection;
	sortByVacancyCount?: SortDirection;
};

export type ProfessionsResponse = { professions: ProfessionType[] };
