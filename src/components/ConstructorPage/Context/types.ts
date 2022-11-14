import type { Dispatch } from 'react';
import { EducationModule, Id } from '../../../common/types';
import { setColumns, setCurrentSemester, setCurrentStep, setSelectedDirection, setSelectedType } from './actions';
import { ColumnType } from '../Constructor/TrackPicker/types';

export type ConstructorContextState = {
	currentStep: number;
	selectedDirection?: Id;
	selectedType?: Id;
	semesters: Semester[];
	currentSemester: Id;
	columns: Column[];
};

export type Step = {
	title: string;
	content: JSX.Element;
};

export type Semester = {
	id: Id;
	name: string;
	columns?: ColumnType[];
	disabled?: boolean;
	finish: boolean;
};

export type Column = {
	id: Id;
	name: string;
	items: EducationModule[];
	extra: boolean;
};

export type ConstructorContextActions = ReturnType<
	| typeof setCurrentStep
	| typeof setSelectedDirection
	| typeof setSelectedType
	| typeof setCurrentSemester
	| typeof setColumns
>;

export type ConstructorContext = {
	state: ConstructorContextState;
	dispatch: Dispatch<ConstructorContextActions>;
};
