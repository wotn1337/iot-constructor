import { Id, SortDirection } from '../../../common/types';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

export type Filter = {
	title: string;
	key: string;
	items: {
		title: string;
		id: Id;
	}[];
	selectedIds: Id[];
	onChange: (ids: Id[]) => void;
	loading?: boolean;
};

export type Sorter = {
	index: number;
	label: string;
	sortField: string;
	direction: SortDirection;
};

export const sortIcons = {
	asc: SortAscendingOutlined,
	desc: SortDescendingOutlined,
};

export const reverseSortDirection: Record<SortDirection, SortDirection> = {
	asc: 'desc',
	desc: 'asc',
};
