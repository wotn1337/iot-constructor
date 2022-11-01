import { Contacts, Partner, SocialNetworks, StudentReview } from '../common/types';

export type PartnersResponse = { partners: Partner[] };
export type StudentReviewResponse = { reviews: StudentReview[] };
export type AdmissionCommitteeContactsResponse = { admission_committee_contacts_block: Contacts };
export type SocialNetworksResponse = {
	social_networks_block: { id: string; data: SocialNetworks[]; institute: string };
};
