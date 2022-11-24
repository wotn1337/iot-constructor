import { Discipline, Id } from '../../../common/types';

export type Semester = {
	id: Id;
	name: string;
	lists: List[];
};

export type List = {
	id: Id;
	title: string;
	type: 'default' | 'primary';
	items: Discipline[];
	placeholder?: string;
};
