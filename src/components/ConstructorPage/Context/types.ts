import type { Dispatch } from 'react';
import { EducationModule, Id } from '../../../common/types';
import {
	setColumns,
	setCurrentSemester,
	setCurrentStep,
	setSelectedDirection,
	setSelectedType,
	setSemesterColumns,
	setSemesterFinish,
} from './actions';

export type ConstructorContextState = {
	currentStep: number;
	selectedDirection?: Id;
	selectedType?: Id;
	semesters: Semester[];
	currentSemester: Id;
	columns: IColumns;
};

export type Step = {
	title: string;
	content: JSX.Element;
};

export type Semester = {
	id: Id;
	name: string;
	columns?: IColumns;
	disabled?: boolean;
	finish: boolean;
};

export type Column = {
	id: Id;
	name: string;
	items: EducationModule[];
	extra: boolean;
};

export interface IColumns {
	[key: string]: Column;
}

export type ConstructorContextActions = ReturnType<
	| typeof setCurrentStep
	| typeof setSelectedDirection
	| typeof setSelectedType
	| typeof setCurrentSemester
	| typeof setColumns
	| typeof setSemesterColumns
	| typeof setSemesterFinish
>;

export type ConstructorContext = {
	state: ConstructorContextState;
	dispatch: Dispatch<ConstructorContextActions>;
};
