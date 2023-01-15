import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_DISCIPLINE_ID,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
	SET_SEMESTER_COLUMNS,
	SET_SEMESTER_FINISH,
	SET_SEMESTERS,
	SET_TRACK_POINTS,
	SET_TRACKS,
	SET_SELECTED_TRAJECTORY,
	SET_TRAJECTORY_ACADEMIC_PLAN,
	SET_FINAL_ACADEMIC_PLAN,
} from './constants';
import { Id } from '../../../common/types';
import { IColumns, Semester, TrackProgress } from './types';
import { STEP_TYPE } from '../types';
import { Semester as AcademicSemester } from '../AcademicPlan/types';

type Action<T extends string, U extends any = any> = { type: T; payload: U };

export const setCurrentStep = <T extends number>(step: T): Action<typeof SET_CURRENT_STEP, T> => ({
	type: SET_CURRENT_STEP,
	payload: step,
});

export const setSelectedDirection = <T extends Id>(dirId: T): Action<typeof SET_SELECTED_DIRECTION, T> => ({
	type: SET_SELECTED_DIRECTION,
	payload: dirId,
});

export const setSelectedType = <T extends STEP_TYPE>(typeId: T): Action<typeof SET_SELECTED_TYPE, T> => ({
	type: SET_SELECTED_TYPE,
	payload: typeId,
});

export const setSelectedTrajectory = <T extends Id | undefined>(id: T): Action<typeof SET_SELECTED_TRAJECTORY, T> => ({
	type: SET_SELECTED_TRAJECTORY,
	payload: id,
});

export const setCurrentSemester = <T extends number>(currSem: T): Action<typeof SET_CURRENT_SEMESTER, T> => ({
	type: SET_CURRENT_SEMESTER,
	payload: currSem,
});

export const setColumns = <T extends IColumns>(columns: T): Action<typeof SET_COLUMNS, T> => ({
	type: SET_COLUMNS,
	payload: columns,
});

export const setSemesterColumns = <T extends { id: Id; columns: IColumns }>(
	data: T
): Action<typeof SET_SEMESTER_COLUMNS, T> => ({
	type: SET_SEMESTER_COLUMNS,
	payload: data,
});

export const setSemesters = <T extends Semester[]>(semester: T): Action<typeof SET_SEMESTERS, T> => ({
	type: SET_SEMESTERS,
	payload: semester,
});

export const setSemesterFinish = <T extends { id: Id; isFinished: boolean }>(
	semester: T
): Action<typeof SET_SEMESTER_FINISH, T> => ({
	type: SET_SEMESTER_FINISH,
	payload: semester,
});

export const setTracks = <T extends TrackProgress[]>(tracks: T): Action<typeof SET_TRACKS, T> => ({
	type: SET_TRACKS,
	payload: tracks,
});

export const setTracksPoints = <T extends { id: Id; points: number }>(
	track: T
): Action<typeof SET_TRACK_POINTS, T> => ({
	type: SET_TRACK_POINTS,
	payload: track,
});

export const setDisciplineId = <T extends Id | undefined>(id: T): Action<typeof SET_DISCIPLINE_ID, T> => ({
	type: SET_DISCIPLINE_ID,
	payload: id,
});

export const setTrajectoryAcademicPlan = <T extends Semester[] | undefined>(
	semesters: T
): Action<typeof SET_TRAJECTORY_ACADEMIC_PLAN, T> => ({
	type: SET_TRAJECTORY_ACADEMIC_PLAN,
	payload: semesters,
});

export const setFinalAcademicPlan = <T extends AcademicSemester[] | undefined>(
	semesters: T
): Action<typeof SET_FINAL_ACADEMIC_PLAN, T> => ({
	type: SET_FINAL_ACADEMIC_PLAN,
	payload: semesters,
});
