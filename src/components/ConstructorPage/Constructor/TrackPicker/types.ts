import { EducationModule, Id } from '../../../../common/types';

export type ColumnType = {
	id: Id;
	name: string;
	extra: boolean;
	items: EducationModule[];
};
