import { Id } from '../../../common/types';

export type Filter = {
	title: string;
	key: string;
	items: {
		title: string;
		id: Id;
	}[];
	selectedIds: Id[];
	onChange: (ids: Id[]) => void;
};

export type Sorter = {
	title: string;
	id: Id;
};