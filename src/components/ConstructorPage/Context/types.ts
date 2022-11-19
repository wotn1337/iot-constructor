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
	setTracks,
	setTracksPoints,
} from './actions';
import React from 'react';

export type ConstructorContextState = {
	currentStep: number;
	selectedDirection?: Id;
	selectedType?: Id;
	semesters: Semester[];
	currentSemester: Id;
	columns: IColumns;
	tracks: TrackProgress[];
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

export type TrackProgress = {
	id: Id;
	title: string;
	color: React.CSSProperties['color'];
	points: number;
	percent?: number;
	discipline_evaluation?: number;
	slug?: string;
	description?: string;
	sum_discipline_levels_points: number;
};

export type ConstructorContextActions = ReturnType<
	| typeof setCurrentStep
	| typeof setSelectedDirection
	| typeof setSelectedType
	| typeof setCurrentSemester
	| typeof setColumns
	| typeof setSemesterColumns
	| typeof setSemesterFinish
	| typeof setTracks
	| typeof setTracksPoints
>;

export type ConstructorContext = {
	state: ConstructorContextState;
	dispatch: Dispatch<ConstructorContextActions>;
};
