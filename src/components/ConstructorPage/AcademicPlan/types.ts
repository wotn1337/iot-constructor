import { Discipline, Id } from '../../../common/types';

export type Semester = {
	id: Id;
	name: string;
	lists: List[];
};

export type List = {
	id?: Id;
	title?: string;
	type?: 'default' | 'primary';
	items: AcademicPlanItem[];
	placeholder?: string;
};

export type AcademicPlanItem = Discipline & {
	isEmpty?: boolean;
	emptyText?: string;
	moduleId?: Id;
};
