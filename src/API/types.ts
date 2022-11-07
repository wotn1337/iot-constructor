import { Contacts, Partner, SocialNetwork, StudentReview } from '../common/types';

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
