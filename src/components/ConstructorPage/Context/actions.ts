import {
	SET_COLUMNS,
	SET_CURRENT_SEMESTER,
	SET_CURRENT_STEP,
	SET_SELECTED_DIRECTION,
	SET_SELECTED_TYPE,
	SET_SEMESTER_COLUMNS,
	SET_SEMESTER_FINISH,
} from './constants';
import { Id } from '../../../common/types';
import { IColumns } from './types';

type Action<T extends string, U extends any = any> = { type: T; payload: U };

export const setCurrentStep = <T extends number>(step: T): Action<typeof SET_CURRENT_STEP, T> => ({
	type: SET_CURRENT_STEP,
	payload: step,
});

export const setSelectedDirection = <T extends Id>(dirId: T): Action<typeof SET_SELECTED_DIRECTION, T> => ({
	type: SET_SELECTED_DIRECTION,
	payload: dirId,
});

export const setSelectedType = <T extends Id>(typeId: T): Action<typeof SET_SELECTED_TYPE, T> => ({
	type: SET_SELECTED_TYPE,
	payload: typeId,
});

export const setCurrentSemester = <T extends Id>(currSem: T): Action<typeof SET_CURRENT_SEMESTER, T> => ({
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

export const setSemesterFinish = <T extends { id: Id; isFinished: boolean }>(
	semester: T
): Action<typeof SET_SEMESTER_FINISH, T> => ({
	type: SET_SEMESTER_FINISH,
	payload: semester,
});
