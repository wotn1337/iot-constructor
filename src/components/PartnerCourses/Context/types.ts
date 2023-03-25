import type { Dispatch } from 'react';
import { EducationModule, Id } from '../../../common/types';
import {
	setColumns,
	setCurrentSemester,
	setDisciplineId,
	setDraggableId,
	setSelectedDirection,
	setSelectedTrajectory,
	setSemesterColumns,
	setSemesterFinish,
	setSemesters,
	setTracks,
	setTracksPoints,
	setTrajectoryAcademicPlan,
} from './actions';
import React from 'react';

export type ConstructorContextState = {
	currentStep: number;
	selectedDirection?: Id;
	selectedTrajectory?: Id;
	semesters: Semester[];
	currentSemester: number;
	columns: IColumns;
	tracks: TrackProgress[];
	disciplineId?: Id;
	trajectoryAcademicPlan?: Semester[];
	draggableId: string;
};

export type Semester = {
	id: Id;
	name: string;
	order: number;
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
	| typeof setSelectedDirection
	| typeof setCurrentSemester
	| typeof setColumns
	| typeof setSemesterColumns
	| typeof setSemesters
	| typeof setSemesterFinish
	| typeof setTracks
	| typeof setTracksPoints
	| typeof setDisciplineId
	| typeof setSelectedTrajectory
	| typeof setTrajectoryAcademicPlan
	| typeof setDraggableId
>;

export type ConstructorContext = {
	state: ConstructorContextState;
	dispatch: Dispatch<ConstructorContextActions>;
};
