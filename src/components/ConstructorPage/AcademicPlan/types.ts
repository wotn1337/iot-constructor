import { Discipline, Id } from '../../../common/types';

export type Semester = {
	id: Id;
	number: number;
	lists: List[];
};

export type List = {
	id: Id;
	title: string;
	type: 'default' | 'primary';
	items: Discipline[];
};
