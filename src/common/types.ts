export type Id = string | number;

export type Partner = {
	id: Id;
	title: string;
	description: string;
	logo: string;
};

export type StudentReview = {
	id: Id;
	author: string;
	text: string;
	photo: string | null;
	course: string | null;
	educational_direction: string | null;
	year_of_issue: number | null;
};

export type Contacts = {
	id: Id;
	address: string;
	phone_number: string;
	email: string;
	institute: string;
};

export type SocialNetwork = {
	name: string;
	url: string;
	icon: string;
};
