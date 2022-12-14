import {
	Contacts,
	Discipline,
	EducationModule,
	Partner,
	SocialNetwork,
	StudentReview,
	Trajectory,
	Direction,
} from '../common/types';

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

export type EducationalDirectionsResponse = {
	meta: { total: number };
	educational_directions: Direction[];
};
export type EducationalModulesResponse = {
	meta: { total: number };
	semesters: { educationalModules: EducationModule[] }[];
};
export type ProfessionalTrajectoriesResponse = { professional_trajectories: Trajectory[] };
export type ProfessionalTrajectoryResponse = { professional_trajectory: Trajectory };
export type DisciplinesResponse = { discipline: Discipline };
